const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  projectId: "xhsioy",
  e2e: {
    setupNodeEvents,
    pageLoadTimeout: 200000,
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/integration/BDD/*.feature",
    env: {
      TAGS: "not @ignore",
    },
  },
});
