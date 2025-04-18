# Spider Scholar - Research Trends Dashboard

Spider Scholar is a research trends dashboard that displays the top 10 most cited computer science papers from the past year, using data from the OpenAlex API.

## Features

- Fetches data from the OpenAlex API
- Displays top 10 most cited papers in computer science
- Responsive design that works on mobile and desktop
- Google AdSense placeholder integration
- Clean, modern UI with Spider Scholar branding

## Tech Stack

- React with TypeScript for the frontend
- Material UI (MUI) for components and styling
- Axios for API requests
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository or extract the ZIP file
2. Navigate to the project directory
3. Install dependencies:

```bash
cd frontend
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `build` directory and can be served using any static file server.

## Google AdSense Integration

To replace the placeholder ads with actual Google AdSense:

1. Sign up for a Google AdSense account if you don't have one
2. Create ad units in your AdSense dashboard
3. Replace the placeholder code in `src/services/adSenseService.ts` with your actual AdSense code
4. Add the AdSense script to your `public/index.html` file

## Project Structure

- `src/components/` - React components
- `src/services/` - API and service functions
- `src/styles/` - Theme and styling
- `src/assets/` - Images and static assets
- `src/types/` - TypeScript type definitions

## API Integration

The application uses the OpenAlex API to fetch research paper data. The main API integration is in `src/services/openAlexService.ts`.

## Customization

- Colors and theme settings can be modified in `src/styles/theme.ts`
- The Spider Scholar logo is in `src/assets/spider-scholar-logo.png`

## License

This project is intended as a demonstration and is not licensed for commercial use without permission.

## Acknowledgements

- Data provided by [OpenAlex](https://openalex.org/)
- UI components from [Material UI](https://mui.com/)
