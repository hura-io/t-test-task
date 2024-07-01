const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: "https://js-55fbfg.stackblitz.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
