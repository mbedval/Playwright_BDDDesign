Feature: Playwright site

    Scenario: Check title
        Given I open url "https://playwright.dev"
        When I click link "Get started"
        And I click link "Browsers"
        Then I see in title "Browsers"