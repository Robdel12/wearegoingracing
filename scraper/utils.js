const HtmlTableToJson = require('html-table-to-json');
const { writeFileSync } = require('fs');

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

async function goToLeague(page, id = '3825') {
  console.log('Going to leauge', id);
  await page.goto(`https://members.iracing.com/membersite/member/LeagueView.do?league=${id}`);
}

async function login(page) {
  if (!EMAIL || !PASSWORD) {
    throw new Error('You must pass login information. Disabling');
  }

  await goToLeague();
  await page.waitFor('.username');
  await page.type('.username', EMAIL, { delay: 5 });
  await page.type('.password', P9ASSWORD, { delay: 5 });
  await page.click('.log-in');
}

// finds a season and gathers all of the session results links, then calls `gatherRaceResults`
// which will then return JSON of the sessions results
async function gatherRaceResults(page, raceResultLink) {
  let browser = await page.browserContext();
  let resultTab = await browser.newPage();

  await resultTab.goto(raceResultLink);
  await resultTab.waitFor('#resultsDiv');

  let data = await gatherSessionResults(resultTab, { raceOnly: true });
  await resultTab.close();

  return data;
}

async function getSesasonResults(page, seasonName = 'friday fun') {
  console.log('gathering season results');

  await page.waitFor('.ui_tab_content');
  await page.click('#raceSeasonsSegment');
  await page.waitFor('#seasonsOverview');
  // find the season with the matching name
  await page.evaluate(
    seasonName =>
      Array.from(document.querySelectorAll('.inner-section-content'))
        .find(season => season.querySelector('h2').textContent.toLowerCase() === seasonName)
        .click(),
    seasonName
  );

  await page.waitFor('#schedule-table table tr:last-child');

  // gather all race result links
  let raceResultLinks = await page.evaluate(() => {
    let regExp = /\(([^)]+)\)/;
    let $links = Array.from(document.querySelectorAll('#schedule-table tr.pending-row'));

    return $links
      .map($race => $race.querySelector('td:last-child a'))
      .map($link => {
        let ids = regExp.exec($link.href)[1].split(',');

        return `https://members.iracing.com/membersite/member/EventResult.do?&subsessionid=${ids[0]}&custid=${
          ids[1]
        }`;
      });
  });

  // go through each race result and turn that into JSON
  let resultsTabs = raceResultLinks.map(async link => await gatherRaceResults(page, link));
  let results = await Promise.all(resultsTabs);

  writeFileSync(
    `${__dirname}/../src/data/seasons/results/${seasonName.replace(' ', '')}.json`,
    JSON.stringify(results)
  );
  console.log(`wrote ${seasonName} results`);

  return results;
}

async function gatherSessionResults(page, { raceOnly } = { raceOnly: false }) {
  let trackName = await page.evaluate(() => document.querySelector('#result-trackconfig').innerText);
  let resultTime = await page.evaluate(() => document.querySelector('#result-datetime').innerText);

  // hmm come back if this is useful
  // let $summaryTable = await page.evaluate(() => {
  //   let $summary = document.querySelector('.summary') || {};
  //   return $summary.outerHTML;
  // });

  let $resultsTables = await page.evaluate(() => {
    let $practice = document.querySelector('.single-results-container[alt="PRACTICE"]') || {};
    let $quali = document.querySelector('.single-results-container[alt="QUALIFY"]') || {};
    let $race = document.querySelector('.single-results-container[alt="RACE"]') || {};

    return $practice.outerHTML + $quali.outerHTML + $race.outerHTML;
  });

  // TODO: It would be *really great* to not rely on assumed ordering of the array
  let sessions = new HtmlTableToJson($resultsTables).results.reduce((sessionsAcc, session, index) => {
    sessionsAcc['track'] = trackName;
    sessionsAcc['resultTime'] = resultTime;

    if (index === 0) {
      sessionsAcc['practice'] = session;
    } else if (index === 1) {
      sessionsAcc['qualifying'] = session;
    } else if (index === 2) {
      // When parsing the race table we get the first two rows which are
      // links to protest, etc. (not data, so remove it)
      sessionsAcc['race'] = session.filter(result => Object.keys(result).length !== 1);
    }

    return sessionsAcc;
  }, {});

  return sessions;
}

// Gather the tracks from iRacing, return it as an object
function gatherTracks() {
  let $tracks = Array.from(document.querySelectorAll('.track-container'));
  let tracks = $tracks.map($trackContainer => {
    let $configs = Array.from($trackContainer.querySelectorAll('.one-track-config'));
    let configs = $configs.map($config => ({
      name: $config.querySelector('.expanded-track-details strong').innerText,
      map: $config.querySelector('img').getAttribute('src')
    }));

    return {
      name: $trackContainer.querySelector('.track-title-toggle').innerText,
      configs: configs
    };
  });

  return tracks;
}

module.exports = {
  login,
  goToLeague,
  gatherTracks,
  getSesasonResults,
  gatherSessionResults
};
