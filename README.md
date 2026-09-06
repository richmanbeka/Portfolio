# Portfolio

Personal developer portfolio for Robera Mulgeta, built with Next.js and React.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- About, skills, projects, and contact sections
- Downloadable resume link
- Links to GitHub, LinkedIn, and Telegram

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/richmanbeka/Portfolio.git
cd Portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
portfolio/
|-- public/             # Static assets, including the resume and profile image
|-- src/
|   `-- app/
|       |-- globals.css # Global styles
|       |-- layout.tsx  # Root layout
|       `-- page.tsx    # Portfolio page
|-- package.json
`-- README.md
```

## Available Scripts

```bash
npm run dev   # Start the development server
npm run lint  # Run ESLint
npm run build # Create a production build
npm start     # Start the production server
```