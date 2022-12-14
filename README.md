This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
