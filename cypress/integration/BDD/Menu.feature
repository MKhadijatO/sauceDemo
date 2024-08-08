Feature: Testing Saucedemo E-commerce website
 Application regression

@about
Scenario: Validating the About feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on About
    

@closebutton
Scenario: Validating the Close button feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on X button
    Then I validate the menu list closes 


@allitems    
Scenario: Validating the All Items feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on All Items
    Then I validate the Products Page

@ResetApp
Scenario: Validating the Reset App feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on Reset App
    Then I validate the Products Page


