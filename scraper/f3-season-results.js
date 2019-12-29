const puppeteer = require('puppeteer');
const { login, goToLeague, gatherSessionResults, getSesasonResults } = require('./utils');

(async () => {
  try {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await login();
    // because iracing doesn't redirect back after login sometimes
    await goToLeague(page);
    // write the results to disk
    await getSesasonResults(page, 'S1 2020 F3');
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();
