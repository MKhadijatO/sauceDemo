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

//@closebutton
Given ("I visit Saucedemo E-commerce website", function () {
  cy.visit("https://www.saucedemo.com/v1");
});

When ("I login into the website", function () {
  //Fill the correct login details and login
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
  cy.get("#login-button").click();

  //Assert the new page has loaded by checking for the page title: Product
  cy.get(".product_label").should("contains.text", "Products");
});

When ("I click the Menu icon", function () {
  cy.get("button").contains("Open Menu").click();
});

Then("I click on X button", function () {
  cy.get("button").contains("Close Menu").click();
});

Then("I validate the menu list closes", function () {
  //asset that the close button is not displayed
  cy.get(".bm-cross-button").should("not.be.visible");
});


//@about
Then("I click on About", function () {
  cy.get("#about_sidebar_link").click();
});

Then("I validate the About menu", function () {
  //opens the about page
  cy.url().should("eq", "https://saucelabs.com/");
  cy.scrollTo("bottom");
  
  
  //intercept
  cy.intercept("POST", "https://api.segment.io/v1/i").as("separatePost");
  cy.wait("@separatePost").then((interception) => {
    // Log the interception object for debugging
    console.log(interception);

    // Validate the request payload
    expect(interception.request.body).to.have.property("userId");
    expect(interception.request.body).to.have.property("event");

    // Validate the response
    expect(interception.response.statusCode).to.equal(200);
  });
});


//@allitems
Then("I click on All Items", function () {
  cy.get("#inventory_sidebar_link").click();
});

Then("I validate the Products Page", function () {
  //   cy.get(".product_label").should("contains.text", "Products");
  //OR
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});


//@resetApp
Then("I click on Reset App", function () {
  cy.get("#reset_sidebar_link").click();
});
