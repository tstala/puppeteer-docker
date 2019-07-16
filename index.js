const puppeteer = require('puppeteer');

(async() => {
  try {
        const browser = await puppeteer.launch({args: ['--no-sandbox']});
        const page = await browser.newPage();
        await page.goto('https://www.google.com');
        let document = await page.evaluate(() => document.documentElement.outerHTML);
        console.log(document);
        await browser.close();
  } catch(err) {
        console.log(err);
  }
})();
