const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config){
  //Implement the code from here
  return config
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Integration/TestDemo/*.cy.js'
  },
});
