//<reference types="Cypress" />
//<reference types="cypress-iframe" />
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data;
    });
    
    cy.wait(1000)
});


Given("I visit Saucedemo E-commerce website", function () {
    //load the website
  cy.visit("https://www.saucedemo.com/");
});

When("I input valid username and valid password", function () {
    //fill the correct login details
    cy.get("#user-name").type(this.data.validUsermame);
    cy.get("#password").type(this.data.validPassword);
});

Then("I select Login button", function () {
    cy.get("#login-button").click();
});

Then("I validate successful login", function () {
    //check the new page url
    cy.url().should("include", "/inventory.html")

    //assert the new page has loaded by checking for the page title: Product
    cy.get(".title").should('contains.text', "Products");
});

//NEGATIVE SCENERIOS
When ("I input valid username and invalid password", function (){
    cy.get("#user-name").type(this.data.validUsermame);
    cy.get("#password").type(this.data.invalidPassword);

})

Then ("I validate unsuccessful login", function () {
    //assert for error messsage "Epic sadface: Username and password do not match any user in this service"
    cy.get(".title").should('contains.text', "Username and password do not match any user in this service");
})