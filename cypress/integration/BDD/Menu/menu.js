//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});

//@closebutton
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

When("I click the Menu icon", function () {
  cy.get("button").contains("Open Menu").click();
});

Then("I click on X button", function () {
  cy.get("button").contains("Close Menu").click();
});

Then("I validate the menu list closes", function () {
  //asset that the close button is not displayed
  cy.get(".bm-cross-button").should("not.be.visible");
});

//@allitems
Then("I click on All Items", function () {
  cy.get("#inventory_sidebar_link").click();
});

Then("I validate the Products Page", function () {
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");

  //cy.get(".product_label").should("contains.text", "Products");
});

//@about
Then("I click on About", function () {
  //opens the about page
  cy.get("#about_sidebar_link").click({ timeout: 10000 });

  // cy.wait(20000);
  
  cy.origin('https://saucelabs.com', () => {
    cy.get(".MuiBox-root .css-mntjpt").should("be.visible");
  });
  
  // cy.wait(30000);
});

//@resetApp
Then("I click on Reset App", function () {
  cy.get("#reset_sidebar_link").click();
});
