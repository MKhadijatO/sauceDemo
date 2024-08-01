Feature: Testing Saucedemo E-commerce website
 Application regression

@ViewProductDetails

Scenerio: Validating Viewing product detail by clicking on the product name and validate Add to cart button
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I validate the entire Products Page 
    When I click on the product name
    Then I validate the product opens and Add to cart button


Scenerio: Validating Viewing product detail by clicking on the product image and validate Add to cart button
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I validate the entire Products Page 
    When I click on the product image
    Then I validate the product opens and Add to cart button
    Then I click on the Remove button
    When I select the Back to products button

