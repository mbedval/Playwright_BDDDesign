import { expect } from '@playwright/test';
import { Given, When, Then } from "./fixtures";



// 1. Missing step definition for "features\sample.feature:4:9"
Given('I open url {string}', async ({page}, url: string) => {
  await page.goto(url);
});

// 2. Missing step definition for "features\sample.feature:5:9"
When('I click link {string}', async ({page}, name: string) => {
  await page.getByRole("link", { name }).click();
});

// 3. Missing step definition for "features\sample.feature:6:9"
Then('I see in title {string}', async ({}, text: string) => {
  // ...
});