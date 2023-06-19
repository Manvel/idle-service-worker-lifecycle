const puppeteer = require("puppeteer");
const extensionPath = "extension";
async function run()
{
  const browser = await puppeteer.launch({headless: false , args: [
    `--disable-extensions-except=${extensionPath}`,
    `--load-extension=${extensionPath}`,
    "--no-sandbox"
  ]});
}

run();