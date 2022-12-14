import findMatchingRecord from './findMatchingRecord';

// make sure to run npm i to get airtable
const Airtable = require('airtable');

// Authenticate the table
Airtable.configure({
  // this endpoint is from the API docs.
  endpointUrl: 'https://api.airtable.com',

  // Next can automatically find your API key from your .env file
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// this function should return all data for the component we are querying
// (name, code sample, usage guidelines, role, etc.)
export default function getComponentDetails(componentName) {
  return new Promise((resolve, reject) => {
    // connect to our table 'Components
    base('Components')
      // select each page and search the records
      .select()
      .eachPage(
        (records) => {
          // compare the componentName argument to what's in Airtable
          // console.log(records[1]._rawJson.fields['Slug (from Related Components)']);
          const matchingRecord = findMatchingRecord(records, componentName);
          if (matchingRecord != null) {
            // resolve the promise if you find a match, otherwise reject with an error
            resolve(matchingRecord);
          } else {
            reject(new Error('No matching records were found.'));
          }
        },
        (error) => {
          if (error) {
            reject(error);
          }
        },
      );
  });
}
