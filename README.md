# React Template

A modern, batteries-included React + TypeScript starter powered by [Vite](https://vitejs.dev/).
It provides a sensible folder structure, testing setup, linting, formatting, and routing so you
can focus on building features.

## Features

- ⚛️ React 18 with TypeScript and strict type-checking
- ⚡️ Vite for instant dev server start and optimized production builds
- 🧭 React Router for client-side routing
- 🧪 Vitest + Testing Library for unit/component tests
- 🧹 ESLint (with TypeScript + React hooks rules) and Prettier for consistent code quality
- 🧠 Example architecture with feature-based folders and path aliases (`@/`)

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run tests
npm test

# Lint the project
npm run lint

# Create a production build
npm run build
```

Open http://localhost:5173/ in your browser once the dev server is running.

## Project structure

```
src/
├── app/               # Application shell, providers, and routing
├── components/        # Reusable UI components
├── features/          # Feature-oriented modules (e.g., counter example)
├── hooks/             # Shared React hooks
├── pages/             # Route-level components
├── shared/            # Cross-cutting helpers/components
├── styles/            # Global styles and design tokens
├── types/             # Global TypeScript declarations
└── main.tsx           # Application entry point
```

Feel free to extend this structure to fit your domain—for example adding `services/` for API
clients or `store/` for state management libraries.

## Testing

Vitest is configured with the `jsdom` environment and Testing Library so that component tests work
out of the box. Place your tests next to the code they cover (e.g. `Component.test.tsx`) or inside a
`__tests__` folder.

## Linting & formatting

ESLint is configured with TypeScript rules, React hooks rules, and Prettier. Run `npm run lint` to
check for issues. Prettier is configured separately so you can use it via your editor integration or
`npx prettier --write .`.

## Environment variables

Vite uses `.env` files. Copy `.env.example` to `.env` if you need to define environment variables
that should be exposed to the client (prefix them with `VITE_`).

## Deployment

1. Run `npm run build` to generate the production bundle in the `dist/` directory.
2. Serve the contents of `dist/` using any static hosting provider (e.g. Netlify, Vercel, GitHub
   Pages) or a custom Node.js server.

## License

This project is released under the [MIT License](LICENSE).
