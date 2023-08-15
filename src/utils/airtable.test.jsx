import findMatchingRecord from './findMatchingRecord';

const fakeAirtableData = [
  {
    _rawJson: {
      fields: {
        'Component Name': 'Disclosure (Show/Hide)',
        Slug: 'disclosure',
        'Keyboard Interactions': 'a different set of bullet points',
        'Usage Guidelines': 'some more different paragraphs',
      },
    },
  },
];

describe('findMatchingRecord', () => {
  it('returns all of the data associated with a particular component', () => {
    const mockComponentName = 'disclosure';
    const matchingRecord = findMatchingRecord(
      fakeAirtableData,
      mockComponentName,
    );
    // eslint-disable-next-line no-underscore-dangle
    const expectedResult = fakeAirtableData[0]._rawJson.fields;
    expect(matchingRecord).toStrictEqual(expectedResult);
  });
  it('returns null when there is no match', async () => {
    const mockComponentName = 'accordion';
    const matchingRecord = findMatchingRecord(
      fakeAirtableData,
      mockComponentName,
    );
    expect(matchingRecord).toBeNull();
  });
});
