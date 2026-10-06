# TravelloGo

TravelloGo is a responsive travel-discovery and itinerary-planning product concept built with React, React Router, Vite, and Tailwind CSS.

The project explores how travelers can move from broad inspiration to a more focused set of options using destination search, budget filtering, practical travel content, and a clear inquiry flow.

## Live project

[View TravelloGo](https://travel-and-tour-nicolas-dev.netlify.app/)

## Features

- Responsive travel discovery interface
- Destination and travel-style filtering
- Maximum-budget filtering
- Preferred travel-date state
- Reusable destination cards and structured trip data
- Route-based travel journal
- Directly accessible article URLs
- Accessible trip-inquiry dialog
- Controlled form state and validation
- Responsive desktop and mobile navigation
- Repeatable scroll-triggered animations
- Reduced-motion support
- Custom favicon and page metadata
- Netlify-compatible client-side routing

## Technology

- React 18
- React Router
- Vite
- Tailwind CSS
- AOS
- React Slick
- React Icons

## Application structure

```text
src/
├── assets/
├── components/
│   ├── Banner/
│   ├── BannerPic/
│   ├── Blogs/
│   ├── Footer/
│   ├── Hero/
│   ├── Location/
│   ├── Navbar/
│   ├── OrderPopup/
│   ├── Places/
│   └── Testimonial/
├── pages/
│   ├── About.jsx
│   ├── Blogs.jsx
│   ├── BlogsDetails.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   ├── NoPage.jsx
│   └── PlacesRoute.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Run locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Netlify deployment

The project includes a `public/_redirects` file:

```text
/* /index.html 200
```

This allows React Router pages to load correctly when a visitor refreshes or directly opens a nested URL.

## Project status

TravelloGo is a portfolio product concept. Destination content and prices are illustrative. The inquiry flow does not transmit personal information, process payments, or create real reservations.

## Author

Designed and built by [Nicolas Berrizbeitia](https://github.com/nbr625).

- [LinkedIn](https://www.linkedin.com/in/nicolas-berrizbeitia-658212b6/)
- [Email](mailto:nbr625@gmail.com)
