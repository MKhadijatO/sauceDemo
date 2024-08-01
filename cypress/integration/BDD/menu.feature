Feature: Testing Saucedemo E-commerce website
 Application regression


@closebutton
Scenerio: Validating the Close button feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on X button
    Then I validate the menu list closes 

@about
Scenerio: Validating the About feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Menu icon
    Then I click on About
    Then I validate the About 

@allitems    
Scenerio: Validating the All Items feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Cart icon
    When I click the Menu icon
    Then I click on All Items
    Then I validate the Products Page

@cartIcon02
Scenerio: Validating the about feature
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Cart icon
    Then I validate an empty cart
    Then I click on the Continue Shopping button
