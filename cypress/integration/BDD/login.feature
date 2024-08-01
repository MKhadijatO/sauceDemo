Feature: Testing Saucedemo E-commerce website
 Application regression
@login

Scenario: Validate login process with valid username and password
    Given I visit Saucedemo E-commerce website
    When I input valid username and valid password
    Then I select Login button
    Then I validate successful login

Scenario: Validate login process with valid username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input valid username and invalid password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with invalid username and valid password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and valid password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with invalid username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and invalid password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with empty username and valid password
    Given I visit Saucedemo E-commerce website
    When I input empty username and valid password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with valid username and empty password
    Given I visit Saucedemo E-commerce website
    When I input valid username and empty password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with empty username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input empty username and invalid password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with invalid username and empty password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and empty password
    Then I select Login button
    Then I validate unsuccessful login

Scenario: Validate login process with empty username and empty password
    Given I visit Saucedemo E-commerce website
    When I leave the login fields empty
    Then I select Login button
    Then I validate unsuccessful login
