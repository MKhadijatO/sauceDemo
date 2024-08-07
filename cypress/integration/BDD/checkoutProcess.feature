Feature: Testing Saucedemo E-commerce website
 Application regression

@checkoutProcess
Scenario: Validating Checkout Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I fill the Your Information form 
    Then I click on the Continue button
    When I preview the order list
    Then I click on the Finish button
    Then I validate successful completion of order "THANK YOU FOR YOUR ORDER"
    Then I click on the Menu button and All items

@emptyCart
Scenario: Validating an empty cart
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Cart icon
    Then I validate an empty cart
    Then I click on the Continue Shopping button

@checkoutProcess02
Scenario: Validating Checkout Process without filling the Your Information form 
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I leave empty the Your Information form 
    Then I select the Continue button
    Then I validate unsuccessful submission

@checkoutProcess03
Scenario: Validating Checkout Process filling the Your Information form with incomplete details
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I fill the Your Information form with incomplete details
    Then I select the Continue button
    Then I validate unsuccessful checkout

@checkoutProcess04
Scenario: Validating the Remove and Cancel buttons on the Add to Cart Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the remove button on one item
    When I click on the Continue Shopping button
    Then I select an item
    Then I validate the number of items on the cart icon again
    Then I click on the cart icon and view all items in the cart again
    Then I click on the Checkout button
    Then I click on the Cancel button
    Then I click on the Checkout button
    Then I fill the Your Information form
    Then I click on the Continue button
    When I preview the order list and validate quantity and price
    Then I click on the Finish button
    Then I validate successful completion of order "THANK YOU FOR YOUR ORDER"
    Then I click on the Menu button and All items