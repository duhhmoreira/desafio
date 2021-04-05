const faker = require('faker');
const puppeteer = require('puppeteer');

const appUrlBase = 'http://localhost:3000'
const routes = {
    public: {
      signup: `${appUrlBase}/signup`,
      login: `${appUrlBase}/`,
   },
    private: {
      home: `${appUrlBase}/home`,
      cashback: `${appUrlBase}/cashback`,
      newSale: `${appUrlBase}/new-sale`,
   },
};

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false, 
      slowMo: 250, 
    }
  ) 
  page = await browser.newPage()
})
describe('Rota Privada', async () => {
    test('Teste rota privada sem token', async () => {
        await page.goto(routes.private.home);
        await page.waitForSelector('.login')
    }, 9000000);
});

describe('Login', () => {
  test('Teste Login', async () => {    
    await page.goto(routes.public.login);
    await page.waitForSelector('.login');

    await page.click('input[id=email]')
    await page.type('input[id=email]', 'eduardo@email.com')
    await page.click('input[id=password]')
    await page.type('input[id=password]', 'eduardo')
    await page.click('button[type=submit]')
    await page.waitForSelector('.banner')
  }, 1600000);
});

afterAll(() => {
  browser.close()
})