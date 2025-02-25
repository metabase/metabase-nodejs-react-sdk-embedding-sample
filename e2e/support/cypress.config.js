const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.CLIENT_PORT}`,
    supportFile: 'support/cypress.js',
    specPattern: 'test/**/*.cy.spec.js',
    defaultBrowser: 'chrome',
  },
})
