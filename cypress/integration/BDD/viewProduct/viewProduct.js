//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

});


//@ViewProductDetails
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

When("I validate the entire Products Page", function () {
  //Check the new page url
  cy.url().should("include", "/inventory.html")

  //scrols the page to the bottom
  cy.scrollTo("bottom");

  //checks the if the header and footer component of the page loads
  cy.get("#page_wrapper").should('be.visible');
  cy.get("footer").should('be.visible');

  //checks if product lists has image and other details
  cy.get(".inventory_item_img").should("be.visible")
  cy.get(".inventory_item_label").should('be.visible');
  
});

When("I click on the product name", function () {
  cy.get("#item_4_title_link").contains("Sauce Labs Backpack").click();
});

Then("I validate the product opens and Add to cart button", function () {
  //view selected product details
  cy.get(".inventory_details_container").should("be.visible", true);

  //validate product image is visible
  cy.get(".inventory_details_img").should(
    "be.visible",
    true
  );

   //validate product price is visible
   cy.get(".inventory_details_price").should(
    "be.visible",
    true
  );

  //Add to cart button
  cy.get("button[class='btn_primary btn_inventory']").click();
  // cy.get("button[class='btn_primary btn_inventory']").click({ force:true }); //can also be used
});



//@ViewProductDetailsw/img
When("I click on the product image", function () {
  cy.get("#item_4_img_link").should("be.visible").click({force: true});
});

Then("I click on the Remove button", function () {
  //validate product has been added to cart
  cy.get("button[class='btn_secondary btn_inventory']").should("contains.text", "REMOVE");
});

When("I select the Back to products button", function () {
  //select Go Back button
  cy.get("button[class='inventory_details_back_button']").click({force:true});

  //Assert the the product list page opens
  cy.get(".product_label").should("contains.text", "Products");
});
