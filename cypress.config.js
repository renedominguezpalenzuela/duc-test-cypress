const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },

      })
    },
  },
  env: {
    //
    //"site_url": "http://localhost:3000",
     "site_url": "https://renedominguezpalenzuela.github.io",    
    "timeout": 60000

  },
  pageLoadTimeout: 1000000,
  //responseTimeout: 1000000,
  //defaultCommandTimeout: 1000000,
  //execTimeout: 120000,
});
