# LIVE DEMO

[Click here for a live demo](https://nextjs-challenge.vercel.app/)

-----------------------------------------------------------------

-----------------------------------------------------------------

# nextjs-challenge-boilerplate
A basic boilerplate for nextjs challenge

You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:

1. Starts with the command `npm i && npm run dev`
2. Shows a form with “name” and “message” when it runs at localhost:3000
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.
  - A link on that page exists to go back to the homepage
  - You do not need to persist that data in any database, just keep it in memory.

##### BONUS

Feel free to add the following
1. Add some UI/UX features
2. Unit tests (coverage)
3. Code linting


-----------------------------------------------------------------

-----------------------------------------------------------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.