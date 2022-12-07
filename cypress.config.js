// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: '.env.local' });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          // eslint-disable-next-line no-console
          console.log(message);

          return null;
        },
        table(message) {
          // eslint-disable-next-line no-console
          console.table(message);

          return null;
        },
      });

      return config;
    },
  },
});
