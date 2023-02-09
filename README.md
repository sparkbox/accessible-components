This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

View the production version of this repo at [https://accessible-components.sparkbox.com/](https://accessible-components.sparkbox.com/).

## Getting Started

Once you've installed all of the dependencies (`npm install`), you will need to establish your connection to the Airtable database.

1.  Copy the `.env.example` file, making sure it's in the root of your project, and rename it `.env.local`.
2.  Your `env.local` file should include the following:

`AIRTABLE_API_KEY=<generate an API key from your Airtable account overview>`

`AIRTABLE_BASE_ID=<find the ID of your base in your Airtable API documentation>`

This sets up your Airtable API for use in your project.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `npm run prepare` for husky pre-commit hook.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Additional Commands

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `npm run test`       | Run a single test command.                |
| `npm run test:watch` | Rerun tests continuously as files change. |

## Resources

- [Airtable](https://airtable.com/appv8j9j5397PMeQc/tblBFwLfB4EsNdMCC/viwErayvnOTsmyu5C?blocks=hide). To view, log in with the crendentials found in 1Password.
- [Jira](https://sparkbox.atlassian.net/jira/software/projects/AC/boards/133)
- [Google Drive for additional content not yet in Airtable](https://drive.google.com/drive/folders/1_NiJiELDLD5H9zpgUn1hrkmUAAzBQIAt?ths=true)
