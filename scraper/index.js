const puppeteer = require('puppeteer');

const LEAGUE_URL = 'https://members.iracing.com/membersite/member/LeagueView.do?league=3825';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

(async () => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  await page.goto(LEAGUE_URL);
  await page.waitFor('.username');
  await page.type('.username', EMAIL, { delay: 10 });
  await page.type('.password', PASSWORD, { delay: 10 });
  await page.click('.log-in');
  await page.goto(LEAGUE_URL);
  await page.waitFor('.league_heading');

  await browser.close();
})();
