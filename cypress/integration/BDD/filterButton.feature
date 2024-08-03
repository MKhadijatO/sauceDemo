Feature: Testing Saucedemo E-commerce website
 Application regression

@filterButton
Scenario: Validating Filter Button
    Given I visit Saucedemo E-commerce website
    When I login into the website
    When I validate the entire Products Page
    Then I select the Filter Button
    Then I select Name(Z to A)
    When I validate the items are in order from Z to A
    Then I select Name(A to Z)
    When I validate the items are in order from A to Z
    Then I select Price (low to high)
    When I validate the items are in order from lowestprice to highestprice
    Then I select Price (high to low)
    When I validate the items are in order from highestprice to lowestprice