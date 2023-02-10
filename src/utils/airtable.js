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

export const fields = {
  COMPONENT_NAME: 'Component Name',
  SLUG: 'Slug',
  DEFINITION: 'Definition',
  KEYBOARD_INTERACTIONS: 'Keyboard Interactions',
  SEMANTIC_ELEMENTS: 'Semantic Elements',
  ARIA_ROLES: 'ARIA Roles and Attributes',
  FOCUS_EXPECTATIONS: 'Focus Expectaions',
  USAGE_GUIDELINES: 'Usage Guidelines',
  ADDITIONAL_RESOURCES: 'Additional Resources',
  RELATED_COMPONENTS: 'Related Components',
  RELATED_COMPONENTS_NAME: 'Component Name (from Related Components)',
  RELATED_COMPONENTS_SLUG: 'Slug (from Related Components)',
  DEFAULT_IMAGE: 'Default Image',
  HOVER_IMAGE: 'Hover Image',
  ROW_START: 'Row Start',
  ROW_SPAN: 'Row Span',
  COLUMN_START: 'Column Start',
  COLUMN_SPAN: 'Column Span',
};

// this function should return all data for the component we are querying
// (name, code sample, usage guidelines, role, etc.)
export function getComponentDetails(componentName) {
  // Initialize a base
  const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

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

// this function should return title and image data for all components
export async function getAllComponents() {
  // Initialize a base
  const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  // connect to our table 'Components
  const records = await base('Components')
    .select({
      sort: [{ field: 'Component Name', direction: 'asc' }],
    })
    .all();
  const homePageInfo = records
    .filter((record) => {
      if (process.env.NODE_ENV === 'development') {
        return true;
      }

      return record.fields.Published;
    })
    .map((record) => {
      if (!record.fields['Default Image']) {
        // Add coming soon image
      }
      return record.fields;
    });

  return homePageInfo;
}
