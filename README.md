## Project Overview

This is a minicommerce app that allow users to browse through products, them then to cart ad eventually checkout. The products are located in a local JSON file fetched via react query. All the states of the cart are in zustand, persisted to local storage.

To run locally:

1. clone the project

```bash
git clone "https://github.com/adexfit/minicommerce.git"

```

2. Install dependencies

```bash
npm install

```

3. start server

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Netlify

This is the url to the deployed app on netlify [Live link](https://stupendous-cuchufli-cac44d.netlify.app/) for more details.

## Design approach

The app was designed using two colors. The primary color: rgb(170, 104, 23), i also added the two shades of this color:rgb(255 178 86), rgb(255 178 86). It is responsive on all screens. The cart was also kept on the navigation even on mobile screens to ensure a good user experience.

## Tools & Techniques

- Next js 14
- Tailwind Css for styling
- React Query for data fetching
- Zustand for state management
- Jest and React testing Library for testing

## Error-Handling Technique

Errors are caught within a try catch block to prevent the app from crashing

## tsconfig & ESLint configs

Here is my ESLint rules

```bash

"rules": {
    "semi": "error",
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-contradicting-classname": "warn",
    "@typescript-eslint/no-unused-vars": "warn"
  }

```
