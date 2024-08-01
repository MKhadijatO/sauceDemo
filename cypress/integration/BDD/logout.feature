Feature: Testing Saucedemo E-commerce website
 Application regression

@logout

Scenerio: Validating the Logout Process
    Given Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on Logout
    Then I validate successful logout