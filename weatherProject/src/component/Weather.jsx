import React, { useState } from "react";

const api = {
  key: "48773c7929ca250361e79bf3fc712afd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const weatherBackgrounds = {
    Clear: "img/clear.jpg",
    Clouds: "img/clouds.avif",
    Rain: "img/rainy.avif",
    Snow: "img/snow.jpg",
    Mist: "img/mist.jpg"
  }

  const search = (evt) => {
    if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((r) => r.json())
        .then((result) => {
            if (result.cod === "404") {
              setError("City not found.");
              setWeather(null);
            } else {
              setWeather(result);
              setError("");
            }
            setQuery("");
          })
          .catch(() => setError("Failed to fetch data"));
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const backgroundStyle = weather ? {
    backgroundImage: `url(${weatherBackgrounds[weather.weather[0].main] || "img/default.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }: {
    background: "linear-gradient(to right,  #ff7e5f, #feb47b)" // Default gradient
  }

  return (
    <div className="flex flex-col items-center h-screen p-4" style={backgroundStyle}>
      {/* Input box section at the top with increased length */}
      <div className="w-full max-w-xl mt-32">
        <input
          type="text"
          className="w-full p-2 rounded-md border border-gray-300 mb-4"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {error && <div className="text-red-500 text-center">{error}</div>}
      </div>

      {/* Weather display section in the middle */}
      {weather && (
        <div className="text-center p-4 bg-white rounded-lg shadow-lg w-full max-w-md mt-20">
          <div className="location-box">
            <div className="location text-xl font-bold">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date text-gray-500">{dateBuilder(new Date())}</div>
            <div className="weather-box mt-4">
              <div className="temp text-5xl font-bold">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather text-xl">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
