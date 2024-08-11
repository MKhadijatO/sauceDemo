//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});

//@cartIcon01
Given("I visit Saucedemo E-commerce website", function () {
  cy.visit("https://www.saucedemo.com/v1");
});

When("I login into the website", function () {
  //Fill the correct login details and login
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
  cy.get("#login-button").click();

  //Assert the new page has loaded by checking for the page title: Product
  cy.get(".product_label").should("contains.text", "Products");
});

When("I click the Cart icon", () => {
  //validate that no figure is on the cart icon
  cy.get(".shopping_cart_badge").should("not.exist"); // div[class='fa-layers-counter shopping_cart_badge']

  //selects the icon
  cy.get(".shopping_cart_link").click();
});

Then("I validate an empty cart", () => {
  cy.get(".cart_item").should("not.exist"); // div[class="cart_item"]
});

Then("I click on the Continue Shopping button", () => {
  cy.get("a[class='btn_secondary']").click();

  //Assert the the product list page opens
  cy.get(".product_label").should("contains.text", "Products");
});

//@addToCart01
When("I add an item to cart", function () {
  cy.get(".inventory_item:first-of-type .pricebar .btn_primary").click();
});

Then("I validate the number of items on the cart", function () {
  cy.get(".fa-layers-counter").should("contain", "1");
});

Then("I check the no of items in the cart", function () {
  cy.get(".cart_item").should("have.length", 1);
});

//@addToCart02
When("I add some items to cart", () => {
  cy.get(".inventory_item:first-of-type .pricebar .btn_primary").click();
  cy.get(".inventory_item:nth-child(2) .pricebar .btn_primary").click();
  cy.get(".inventory_item:nth-child(3) .pricebar .btn_primary").click();
  cy.get(".inventory_item:nth-child(5) .pricebar .btn_primary").click();
});

Then("I validate the number of items on the cart icon", () => {
  cy.get(".fa-layers-counter").should("contain", "4");
});

Then("I click on the cart icon and view all items in the cart", () => {
  cy.get(".shopping_cart_link").click();

  //validate all items added to cart exists
  cy.get(".inventory_item_name").should("be.visible");
});

Then("I check the total number of items in the cart", function () {
  cy.get(".cart_item").should("have.length", 4);
});

//@removingitems
Then("I click on the remove button on some items", () => {
  cy.get(
    ".cart_item:nth-child(3) .cart_item_label .item_pricebar .btn_secondary"
  ).click();
  cy.get(
    ".cart_item:nth-child(5) .cart_item_label .item_pricebar .btn_secondary"
  ).click();
});

Then("I validate reduction of items on the cart", () => {
  cy.get(".fa-layers-counter").should("contain", "2");
  cy.get(".cart_item").should("have.length", 2);
});

//@goingback
When("I click on the Continue Shoping button", () => {
  cy.wait(6000);
  cy.get(".cart_footer .btn_secondary")
    .should("contain.text", "Continue Shopping")
    .click();
});

Then("I select an item", () => {
  cy.get(".inventory_item:nth-child(4) .pricebar .btn_primary").click();
});

Then("I validate the number of items on the cart icon increases", () => {
  cy.get(".fa-layers-counter").should("contain", "5");
});

Then("I check total number of items in the cart", function () {
  cy.get(".cart_item").should("have.length", 5);
});
