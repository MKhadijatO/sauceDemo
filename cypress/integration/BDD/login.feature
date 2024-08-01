Feature: Testing Saucedemo E-commerce website
 Application regression

@login
Scenario: Validate login process with valid username and password
    Given I visit Saucedemo E-commerce website
    When I input valid username and valid password
    Then I select Login button
    Then I validate successful login

@login1
Scenario: Validate login process with valid username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input valid username and invalid password
    Then I select Login button
    Then I validate unsuccessful login

@login2
Scenario: Validate login process with invalid username and valid password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and valid password
    Then I select Login button
    Then I validate unsuccessful login

@login3
Scenario: Validate login process with invalid username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and invalid password
    Then I select Login button
    Then I validate unsuccessful login

@login4
Scenario: Validate login process with empty username and valid password
    Given I visit Saucedemo E-commerce website
    When I input empty username and valid password
    Then I select Login button
    Then I validate unsuccessful login with empty username

@login5
Scenario: Validate login process with valid username and empty password
    Given I visit Saucedemo E-commerce website
    When I input valid username and empty password
    Then I select Login button
    Then I validate unsuccessful login with empty password

@login6
Scenario: Validate login process with empty username and invalid password
    Given I visit Saucedemo E-commerce website
    When I input empty username and invalid password
    Then I select Login button
    Then I validate unsuccessful login with empty username

@login7
Scenario: Validate login process with invalid username and empty password
    Given I visit Saucedemo E-commerce website
    When I input invalid username and empty password
    Then I select Login button
    Then I validate unsuccessful login with empty password

@login8
Scenario: Validate login process with empty username and empty password
    Given I visit Saucedemo E-commerce website
    When I leave the login fields empty
    Then I select Login button
    Then I validate unsuccessful login with empty credentials


