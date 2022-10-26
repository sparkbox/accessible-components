### Description:

<!-- Add description of work done here -->

### Spec:

Designs: [Designs](DESIGN_URL)

See Story: [FSA22V2-ISSUE](https://sparkbox.atlassian.net/browse/FSA22V2-ISSUE)

### Validation:

<!-- Add description of work done here -->

- [ ] This PR has code changes, and our linters still pass.
- [ ] This PR affects production code, so it was browser tested (see below).
- [ ] This PR has new code, so new tests were added or updated, and they pass.

#### To Validate:

1. Make sure all PR Checks have passed (GitHub Actions, CircleCI, Code Climate, etc).
2. Pull down all related branches.
3. Run `npm install` to make sure you have all proper dependencies. (this project requires Node 16+)
4. Copy the `.env.example` file, making sure it's in the root of your project, and rename it `.env.local`. Search for "Accessible Components" in 1Password to find the API Key and Base ID. Add both of those secrets to your newly created `.env.local` file. That should establish your connection to our Airtable database.
5. Run `npm run lint` to confirm no errors.
6. Run `npm run test` to confirm all tests pass.
7. In terminal: `npm run dev`.
8. Check [localhost:3000](http://localhost:3000/) to see changes.
9. Run axe Devtools on affected pages to confirm no urgent errors.

<!-- Additional validation steps below -->

### Pending Questions:

1.
2.

---

#### Browser Testing

<!--
The browser list should be tailored to specific engagement and client needs.
Delete if irrelevant to this issue
-->

In these browsers, behavior & design closely match original specifications. A user is able to access all content and functionality, including the usability of required assistive devices, such as keyboard and screenreader.

**macOS**

- [ ] Safari (last 2 major versions)
- [ ] Chrome (last 6 months)
- [ ] Firefox (last 6 months)

**Windows**

- [ ] Chrome (last 6 months)
- [ ] Firefox (last 6 months)
- [ ] Edge (last 6 months)

**Mobile**

- [ ] Safari (last 2 major versions)
- [ ] Chrome on Android (last 6 months)
- [ ] Firefox on Android (last 6 months)
