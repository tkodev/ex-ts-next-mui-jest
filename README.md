# ex-ts-next-mui-jest
🍳 Boilerplate for TS + Next 12 + MUI 5 + Jest + Testing Library

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
- General
  - Typescript, Next 12.1
  - Jest with Testing Library Support
  - Mui 5 theme, sx and font support
  - `@/` project root alias for ts, jest and babel 
- `./components`
  - Atomic Design component structure with Mui 5 examples
- `./conductors`
  - Controller & Services api structure
- `./pages`:
  - `./_app.tsx` and `./_document.tsx`: 
    - Style tag rendering / fonts / themes
  - `./api/`: 
    - Next-Connect for express like / connect style api middleware
    - Use controllers and services here
  - `./index.tsx`: 
    - Use components here
- `./public` 
  - files to be copied to `/` path of built app
- `./shared`
  - configs, constants, types and utils

## Getting Started

First, install and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
