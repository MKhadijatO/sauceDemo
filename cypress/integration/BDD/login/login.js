//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  // cy.wait(1000);

  cy.clearLocalStorage();
  cy.clearCookies();

});

Given("I visit Saucedemo E-commerce website", function () {
  //Load the website
  cy.visit("https://www.saucedemo.com/v1/");
});

When("I input valid username and valid password", function () {
  //Fill the correct login details
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
});

Then("I select Login button", function () {
  cy.get("#login-button").click();
});

Then("I validate successful login", function () {
  //Check the new page url
    // cy.url().should("include", "/inventory.html");

  //Assert the new page has loaded by checking for the page title: Product
  cy.get(".product_label").should("contains.text", "Products");
});

//NEGATIVE SCENERIOS
//@login1
When("I input valid username and invalid password", function () {
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.invalidPassword);
});

Then("I validate unsuccessful login", function () {
  //Assert for error message "Epic sadface: Username and password do not match any user in this service"
  cy.get("h3[data-test='error']").should(
    "contains.text",
    "Username and password do not match any user in this service"
  );
});

//@login2
When("I input invalid username and valid password", function () {
  cy.get("#user-name").type(this.data.invalidUsermame);
  cy.get("#password").type(this.data.validPassword);
});

//@login3
When("I input invalid username and invalid password", function () {
  cy.get("#user-name").type(this.data.invalidUsermame);
  cy.get("#password").type(this.data.invalidPassword);
});

//@login4
When("I input empty username and valid password", function () {
  cy.get("#user-name").should("have.value", "");
  cy.get("#password").type(this.data.validPassword);
});

Then("I validate unsuccessful login with empty username", function () {
  //Assert for error message "Epic sadface: Username and password do not match any user in this service"
  cy.get("h3[data-test='error']").should(
    "contains.text",
    "Username is required"
  );
});

//@login5
When("I input valid username and empty password", function () {
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").should("have.value", "");
});

Then("I validate unsuccessful login with empty password", function () {
  //Assert for error message "Epic sadface: Username and password do not match any user in this service"
  cy.get("h3[data-test='error']").should(
    "contains.text",
    "Password is required"
  );
});

//@login6
When("I input empty username and invalid password", function () {
  cy.get("#user-name").should("have.value", "");
  cy.get("#password").type(this.data.invalidPassword);
});

//@login7
When("I input invalid username and empty password", function () {
  cy.get("#user-name").type(this.data.invalidUsermame);
  cy.get("#password").should("have.value", "");
});

//@login8
When("I leave the login fields empty", function () {
  cy.get("#user-name").should("have.value", "");
  cy.get("#password").should("have.value", "");
});

Then("I validate unsuccessful login with empty credentials", function () {
  //Assert for error message "Epic sadface: Username and password do not match any user in this service"
  cy.get("h3[data-test='error']").should(
    "contains.text",
    "Username is required"
  );
});
