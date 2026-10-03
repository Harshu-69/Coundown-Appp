# Countdown App

A simple countdown timer built with **React** and **Vite**. Pick a date and time, hit Start, and watch the live countdown in days, hours, minutes and seconds.

## Features

- Select any future date and time with a datetime picker
- Live countdown updating every second
- Start and Reset controls
- Automatically stops at zero (never goes negative)
- Cleans up the interval on unmount, no memory leaks

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Harshu-69/Coundown-App.git

# Go to the project folder
cd Coundown-App

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
Coundown-App/
├── public/
├── src/
│   ├── App.jsx
│   ├── Countdown.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. The user picks a target date and time.
2. On **Start**, any existing interval is cleared and a new one runs every second.
3. Each tick calculates `target - now` and updates the state.
4. When the remaining time reaches 0, the interval is cleared automatically.
5. **Reset** stops the timer and sets the display back to zero.

## Author

**Harsh**
GitHub: [@Harshu-69](https://github.com/Harshu-69)

## License

This project is open source and available under the [MIT License](LICENSE).