//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  cy.wait(1000);

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});

Given ("I visit Saucedemo E-commerce website", function () {
    cy.visit("https://www.saucedemo.com/", {
        onBeforeLoad(win) {
          // Disable certain resources to speed up loading
          win.fetch = null; // Disable fetch API
        },
        timeout: 30000, // 30 seconds
      });
});

When ("I login into the website", function(){
   
    //Fill the correct login details and login
    cy.get("#user-name").type(this.data.validUsermame);
    cy.get("#password").type(this.data.validPassword);
    cy.get("#login-button").click();
    
    //Assert the new page has loaded by checking for the page title: Product
    cy.get(".title").should("contains.text", "Products");
});

When ("I validate the entire Products Page", function(){
    //Check the new page url
    cy.url().should("include", "/inventory.html").scrollbottom();
}); 

When ("I click on the product name", function () {
    cy.get("root").click();
});

Then ("I validate the product opens and Add to cart button", function () {
    //view selected product details
    cy.get(".inventory_details_desc.large_size").should("be.visible", true);

    //validate product image is visible
    cy.get("img[alt='Test.allTheThings() T-Shirt (Red)']").should("be.visible", true);
    // cy.get("img[class$='inventory_details_img']").should("be.visible", true);

    //Add product to cart button
    cy.get("#add-to-cart").click();

    //validate product has been added to cart
    cy.get("#remove").should("contains.text", "Remove");

    //select Go Back button 
    cy.get("#product-name").click();

});


