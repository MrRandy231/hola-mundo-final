const puppeteer = require('puppeteer');

test('la página contiene el texto "Hola Mundo"', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + __dirname + '/index.html');
    const text = await page.$eval('h1', el => el.textContent);
    expect(text).toBe('Hola Mundo');
    await browser.close();
});
