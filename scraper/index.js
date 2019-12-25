const puppeteer = require('puppeteer');
const { gatherTracks } = require('./utils');

const LEAGUE_URL = 'https://members.iracing.com/membersite/member/LeagueView.do?league=3825';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

(async () => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  async function login() {
    await page.goto(LEAGUE_URL);
    await page.waitFor('.username');
    await page.type('.username', EMAIL, { delay: 10 });
    await page.type('.password', PASSWORD, { delay: 10 });
    await page.click('.log-in');
  }

  await login();
  await page.goto('https://members.iracing.com/membersite/member/Tracks.do?forceload=owned');
  await page.waitFor('#Title_Pages');
  let tracks = await page.evaluate(gatherTracks);

  await browser.close();
})();
