//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
  cy.clearLocalStorage();
  cy.clearCookies();
  // cy.wait(1000);
});

Given("I visit Saucedemo E-commerce website", function () {
  cy.visit("https://www.saucedemo.com/v1/");
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

Then("I click on Logout", function () {
  cy.get("#logout_sidebar_link").click();
});

Then("I validate successful logout", function () {
  cy.get("#login-button").should("have.value", "LOGIN");
});
