const puppeteer = require('puppeteer');
const { login, goToLeague, gatherTracks, gatherSessionResults, getSesasonResults } = require('./utils');

(async () => {
  try {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();

    await login(page);
    // because iracing doesn't redirect back after login sometimes
    await goToLeague(page, '2061');

    await getSesasonResults(page);

    // await page.goto('https://members.iracing.com/membersite/member/Tracks.do?forceload=owned');
    // await page.waitFor('#Title_Pages');
    // let tracks = await page.evaluate(gatherTracks);
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();
