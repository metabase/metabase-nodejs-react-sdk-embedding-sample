const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.CLIENT_PORT}`,
    supportFile: 'e2e/support/cypress.js',
    specPattern: 'e2e/test/**/*.cy.spec.js',
    defaultBrowser: 'chrome',
  },
})
