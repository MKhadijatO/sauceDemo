import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  
});

Given("I visit Saucedemo E-commerce website", function () {
  cy.visit("https://www.saucedemo.com/v1");
});

When("I login into the website", function () {
  cy.get("#user-name").type(this.data.validUsermame);
  cy.get("#password").type(this.data.validPassword);
  cy.get("#login-button").click();
});

When("I validate the entire Products Page", function () {
  cy.get(".inventory_list").should("be.visible");
});

Then("I select the Filter Button", function () {
  cy.get(".product_sort_container").should("be.visible");
});

Then("I select Name Z to A", function () {
  cy.get(".product_sort_container").select("za");
});

When("I validate the items are in order from Z to A", function () {
  cy.get(".inventory_item_name").then((items) => {
    const names = [...items].map((item) => item.innerText);
    const sortedNames = [...names].sort().reverse();
    expect(names).to.deep.equal(sortedNames);
  });
});

Then("I select Name A to Z", function () {
  cy.get(".product_sort_container").select("az");
});

When("I validate the items are in order from A to Z", function () {
  cy.get(".inventory_item_name").then((items) => {
    const names = [...items].map((item) => item.innerText);
    const sortedNames = [...names].sort();
    expect(names).to.deep.equal(sortedNames);
  });
});

Then("I select Price low to high", function () {
  cy.get(".product_sort_container").select("lohi");
});

When(
  "I validate the items are in order from lowest price to highest price",
  function () {
    cy.get(".inventory_item_price").then((items) => {
      const prices = [...items].map((item) =>
        parseFloat(item.innerText.replace("$", ""))
      );
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  }
);

Then("I select Price high to low", function () {
  cy.get(".product_sort_container").select("hilo");
});

When(
  "I validate the items are in order from highest price to lowest price",
  function () {
    cy.get(".inventory_item_price").then((items) => {
      const prices = [...items].map((item) =>
        parseFloat(item.innerText.replace("$", ""))
      );
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  }
);
