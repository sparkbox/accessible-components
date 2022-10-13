export default function findMatchingRecord(records, componentName) {
  // when comparing records in Airtable, find the first record that matches the
  // componentName argument passed to getComponentDetails
  const matchingRecord = records.find((record) => {
    /* eslint-disable no-underscore-dangle */
    if (record._rawJson.fields.Slug.toLowerCase() === componentName) {
      return true;
    }
    return false;
  });
  // keep the `?? null` to ensure it returns null, instead of undefined
  // if it can't find a matching record
  return matchingRecord?._rawJson.fields ?? null;
}
