Feature: Testing Saucedemo E-commerce website
 Application regression

@checkoutProcess
Scenerio: Validating Checkout Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I fill the Your Information form 
    Then I click on the Continue button
    When I preview the order list
    Then I click on the Finish button
    Then I validate successful completion of order "Thank you for your order!"
    Then I click on the Back Home button

@checkoutProcess02
Scenerio: Validating Checkout Process without filling the Your Information form 
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I leave empty the Your Information form 
    Then I click on the Continue button
    Then I validate unsuccessful submission

@checkoutProcess03
Scenerio: Validating Other Buttons on the Add to Cart Process
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I add some items to cart
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the remove button on some items
    When I click on the Continue Shoping button
    Then I select an item
    Then I validate the number of items on the cart icon
    Then I click on the cart icon and view all items in the cart
    Then I click on the Checkout button
    Then I click on the Cancel button
    Then I click on the Checkout button
    Then I fill the Your Information form
    Then I click on the Continue button
    When I preview the order list and validate quantity and price
    Then I click on the Finish button
    Then I validate successful completion of order "Thank you for your order!"
    Then I click on the Back Home button