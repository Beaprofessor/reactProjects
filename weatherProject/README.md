# Weather App

A simple and elegant weather application built using React and Tailwind CSS. This app fetches weather data from the OpenWeatherMap API and displays it based on the user's search query.

## Features

- **Real-time Weather Data:** Fetches and displays current weather conditions for any city in the world.
- **Dynamic Background:** Background changes based on the weather conditions (e.g., clear, cloudy, rainy, snowy).
- **Responsive Design:** Fully responsive design, looks great on both desktop and mobile devices.
- **Elegant UI:** Utilizes Tailwind CSS for a clean and modern user interface.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **OpenWeatherMap API:** API used for fetching real-time weather data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

### Configuration

To use this project, you'll need an API key from [OpenWeatherMap](https://openweathermap.org/). Replace the placeholder API key in `Weather.jsx` with your own:

```javascript
const api = {
  key: "YOUR_API_KEY_HERE",
  base: "https://api.openweathermap.org/data/2.5/",
};
```

## Usage

1. Enter the name of a city in the search bar and press "Enter".
2. The app will display the current weather, temperature, and other relevant details.
3. The background will change according to the weather conditions.

