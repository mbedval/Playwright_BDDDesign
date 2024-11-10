/** Generated from: features\sample.feature */
import { test } from "../../features/steps/fixtures.ts";

test.describe("Playwright site", () => {

  test("Check title", async ({ Given, page, When, And, Then }) => {
    await Given("I open url \"https://playwright.dev\"", null, { page });
    await When("I click link \"Get started\"", null, { page });
    await And("I click link \"Browsers\"", null, { page });
    await Then("I see in title \"Browsers\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\sample.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Check title": {"pickleLocation":"3:5"},
};