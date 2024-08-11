//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});

//@checkoutProcess
Given("I visit Saucedemo E-commerce website", function() {
  cy.visit("https://www.saucedemo.com/v1");
});

When("I login into the website", function () {
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
  cy.get("#login-button").click();
});

When("I add some items to cart", function () {
  // Add a few items to the cart
  cy.get(".inventory_item").each(($el, index, $list) => {
    if (index < 3) {
      cy.wrap($el).find(".btn_primary").click();
    }
  });
});

Then("I validate the number of items on the cart icon", () => {
  cy.get(".fa-layers-counter").should("contain", "3"); // Assuming you added 3 items
});

Then("I click on the cart icon and view all items in the cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

Then("I click on the Checkout button", () => {
  cy.get(".checkout_button").click();
  cy.url().should("include", "/checkout-step-one.html");
});

Then("I fill the Your Information form", function () {
  cy.get("#first-name").type(this.data.firstName);
  cy.get("#last-name").type(this.data.lastName);
  cy.get("#postal-code").type(this.data.postalCode);
});

Then("I click on the Continue button", function () {
  cy.get(".cart_button").click();
  cy.url().should("include", "/checkout-step-two.html");
});

When("I preview the order list", () => {
  cy.get(".cart_list").should("exist");
});

Then("I click on the Finish button", () => {
  cy.get(".cart_button").click();
  cy.url().should("include", "/checkout-complete.html");
});

Then("I validate successful completion of order {string}", (message) => {
  cy.get(".complete-header").should("contain", message);
});


Then("I click on the Menu button and All items", function () {
  cy.get("button").contains("Open Menu").click();

  cy.get("#inventory_sidebar_link").click();
});

//@emptyCart
When("I click the Cart icon", () => {
  //validate that no figure is on the cart icon
  cy.get(".shopping_cart_badge").should("not.exist");

  //selects the icon
  cy.get(".shopping_cart_link").click();
});

Then("I validate an empty cart", () => {
  cy.get(".cart_item").should("not.exist"); // div[class="cart_item"]
});

Then("I click on the Continue Shopping button", () => {
  cy.get("a[class='btn_secondary']").click();

  //Asserts that the product list page opens
  cy.get(".product_label").should("contains.text", "Products");
});

//@checkoutProcess02
Then("I leave empty the Your Information form", () => {
  // This ensure fields are empty
  cy.get("#first-name").clear();
  cy.get("#last-name").clear();
  cy.get("#postal-code").clear();
});

Then("I select the Continue button", () => {
  cy.get(".cart_button").click();
});

Then("I validate unsuccessful submission", () => {
  // an error message element appears on unsuccessful submission
  cy.get("[data-test='error']").should("be.visible");
  cy.get("[data-test='error']").should(
    "contain",
    "Error: First Name is required"
  );
});

//@checkoutProcess03
Then("I fill the Your Information form with incomplete details", function () {
  cy.get("#first-name").type(this.data.invalidFirstName);
  cy.get("#last-name").type(this.data.invalidLastName);
  cy.get("#postal-code").clear();
});

Then("I validate unsuccessful checkout", () => {
  // an error message element appears on unsuccessful submission
  cy.get("[data-test='error']").should("be.visible");
  cy.get("[data-test='error']").should(
    "contain",
    "Error: Postal Code is required"
  );
});


//@checkoutProcess04
Then("I click on the remove button on one item", function () {
  cy.get(".cart_item").first().find(".cart_button").click();
  cy.get(".cart_item").should("have.length", 2);
});

// When("I click on the Continue Shopping button", () => {
//   cy.get('[data-test="continue-shopping"]').click();
// });

Then("I select an item", () => {
  cy.get(".inventory_item").first().find(".btn_primary").click();
});

Then("I validate the number of items on the cart icon again", () => {
  cy.get(".shopping_cart_badge").should("have.text", "3");
});

Then("I click on the cart icon and view all items in the cart again", () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".cart_item").should("have.length", 3);
});

Then("I click on the Cancel button", () => {
  cy.get('.cart_cancel_link').click();
  cy.get(".shopping_cart_link").click();
});

When("I preview the order list and validate quantity and price", () => {
  cy.get(".cart_item").should("have.length", 3);
  cy.get(".summary_subtotal_label").should("contain", "Item total: $");
});
