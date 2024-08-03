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

When ("I click the Cart icon", ()=> {
    //validate that no figure is on the cart icon
    cy.get(".shopping_cart_badge").should("not.exist"); // div[class='fa-layers-counter shopping_cart_badge']

    //selects the icon
    cy.get(".shopping_cart_link").click();
});

Then ("I validate an empty cart", ()=> {
    cy.get(".cart_item").should("not.exist"); // div[class="cart_item"]
});

Then ("I click on the Continue Shopping button", ()=> {
    cy.get("a[class='btn_secondary']").click();

    //Assert the the product list page opens
  cy.get(".product_label").should("contains.text", "Products");
});



//@addToCart
When ("I add some items to cart", ()=> {
    // cy.get("button[class='btn_primary btn_inventory']").click({ multiple: true });
 
    // cy.get("div.inventory_item #item_4_title_link").should("have.value", ".btn_primary btn_inventory").click();
    // cy.get("button[class='btn_primary btn_inventory']").click();

    // cy.get("div[id='div.inventory_item #item_4_title_link'][class='pricebarbtn_primary btn_inventory']").click();
    cy.get('.inventory_item:first-of-type .pricebar .btn_primary'). click();
});

Then ("I validate the number of items on the cart icon", ()=> {

});

Then ("I click on the cart icon and view all items in the cart", ()=> {

});


//@removingitems
Then ("I click on the remove button on some items", ()=> {

});

Then ("I validate reduction of items on the cart", ()=> {

});


//@goingback
When ("I click on the Continue Shoping button", ()=> {

});

Then ("I select an item", ()=> {

});

Then ("I validate the number of items on the cart icon increases", ()=> {

});

