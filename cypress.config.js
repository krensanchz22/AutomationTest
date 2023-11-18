const { defineConfig } = require("cypress");
const { on } = require("process");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    reporter: 'cypress-mochawesome-reporter',
    baseUrl : 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1920,
    

  },
  
});
