//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  cy.wait(1000);

  // Cypress.on("uncaught:exception", (err, runnable) => {
  //   // returning false here prevents Cypress from
  //   // failing the test
  //   return false;
  // });
});

Given("I visit Saucedemo E-commerce website", function () {
  cy.visit("https://www.saucedemo.com/", {
    onBeforeLoad(win) {
      // Disable certain resources to speed up loading
      win.fetch = null; // Disable fetch API
    },
    timeout: 30000, // 30 seconds
  });
});

When("I login into the website", function () {
  //Fill the correct login details and login
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
  cy.get("#login-button").click();

  //Assert the new page has loaded by checking for the page title: Product
  cy.get(".title").should("contains.text", "Products");
});

When("I click the Menu icon", function () {
  cy.get("#react-burger-menu-btn").click();
});

Then("I click on Logout", function () {
  cy.get("#logout_sidebar_link").click();
});

Then("I validate successful logout", function () {
  cy.get("#login-button").should("contains.text", "Login");
});
