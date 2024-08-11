Feature: Testing Saucedemo E-commerce website
 Application regression


@cartIcon01
Scenario: Validating an empty cart
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I click the Cart icon
    Then I validate an empty cart
    Then I click on the Continue Shopping button

@addToCart01
Scenario: Validating Adding a single item to Cart Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add an item to cart
    Then I validate the number of items on the cart
    Then I click on the cart icon and view all items in the cart
    Then I check the no of items in the cart
    
@addToCart02
Scenario: Validating Adding multiple item to Cart Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I check the total number of items in the cart

@removingitems
Scenario: Validating the Removing items from Cart
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the remove button on some items
    Then I validate reduction of items on the cart

@goingback
Scenario: Validating Going back to Product Page while on the Add to Cart Page
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    When I click on the Continue Shoping button
    Then I select an item
    Then I validate the number of items on the cart icon increases
    Then I click on the cart icon and view all items in the cart
    Then I check total number of items in the cart
    