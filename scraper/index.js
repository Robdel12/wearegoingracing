const puppeteer = require('puppeteer');
const { gatherTracks, gatherSessionResults, getSesasonResults } = require('./utils');

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

(async () => {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  try {
    async function goToLeague(id = '3825') {
      console.log('Going to leauge', id);
      await page.goto(`https://members.iracing.com/membersite/member/LeagueView.do?league=${id}`);
    }

    async function login() {
      await goToLeague('2061');
      await page.waitFor('.username');
      await page.type('.username', EMAIL, { delay: 5 });
      await page.type('.password', PASSWORD, { delay: 5 });
      await page.click('.log-in');
    }

    await login();
    console.log('Logged in');
    // because iracing doesn't redirect back after login sometimes
    await goToLeague('2061');

    let seasonResults = await getSesasonResults(page);

    // await page.goto('https://members.iracing.com/membersite/member/Tracks.do?forceload=owned');
    // await page.waitFor('#Title_Pages');
    // let tracks = await page.evaluate(gatherTracks);
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();
