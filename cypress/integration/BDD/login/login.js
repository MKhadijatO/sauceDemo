/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("I visit Saucedemo E-commerce website", function () {
    cy.visit("https://www.saucedemo.com/")
}); 
    
When ("I input valid username and valid password", function () {
    });

Then ("I select Login button", function () {
    
});

Then ("I validate successful login", function () {

});