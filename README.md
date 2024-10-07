# Calendar-App

This project is a scheduling and booking platform built using Next.js, with authentication powered by Auth.js (Google and GitHub), and calendar integration using Nylas API. The application allows users to manage availability, schedule events, and interact with their calendar.

## Project Tasks

### Setup

- [x] **Set up Next.js Project**
  - Initialize a new Next.js application.
  - Install and configure Tailwind CSS for styling.
  - Add Shadcn for additional UI components.

### Features

- [x] **Create Dashboard Layout**
  - Design the main dashboard interface for navigating through the application.
- [x] **Onboarding Route**
- [x] Typescript safe validation through Zod **Zod** and **Conform**

  - [ ] **Authenticate user using Auth.js** (Google and GitHub).
  - [ ] **Nylas Calendar Integration**: Connect user calendars using Nylas.
    - Retrieve `grant_id` and email to authenticate all API requests.

- [ ] **Settings Route**

  - [ ] Allow users to change their profile image.
  - [ ] Enable users to update their name.

- [ ] **Availability Route**

  - [ ] Display and manage the user’s availability for scheduling events.

- [ ] **Events Route**

  - [ ] Create events in the user's calendar.
  - [ ] Update events as needed.
  - [ ] Delete events from the calendar.

- [ ] **Booking Form**

  - [ ] Generate a unique URL for each user based on their username.
  - [ ] Fetch availability data from the user’s Nylas calendar.
  - [ ] Display available dates and time frames based on the user's availability.
  - [ ] Allow attendees to book events, which will be added to both the host's and attendee's calendars.

- [ ] **Meetings Route**

  - [ ] Display meeting details, including participants and the selected call provider.

- [ ] **Landing Page**
  - [ ] Create a public landing page to introduce the app and guide new users through onboarding.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
