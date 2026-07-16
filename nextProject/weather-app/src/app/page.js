"use client"

import { useState } from "react";

export default function Home() {
  const [city , setCity] = useState("");
  const [weather , setWeather]= useState(null);


 async function fetchWeather(){
  try{
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    console.log(apiKey)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        setWeather(data);
  }catch(error){
    console.log(error);
  }
        
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      🌤 Weather App
    </h1>

    <input
      type="text"
      name="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />

    <button
      onClick={fetchWeather}
      className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
    >
      Check Weather
    </button>

    {weather && (
      <div className="mt-8 text-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />

        <h2 className="text-3xl font-bold text-gray-800">
          {weather.name}
        </h2>

        <p className="text-lg text-gray-500 capitalize mb-4">
          {weather.weather[0].description}
        </p>

        <h3 className="text-5xl font-bold text-blue-600 mb-6">
          {Math.round(weather.main.temp)}°C
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-500">💧 Humidity</p>
            <h4 className="text-xl font-semibold">
              {weather.main.humidity}%
            </h4>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-500">🌬 Wind</p>
            <h4 className="text-xl font-semibold">
              {weather.wind.speed} m/s
            </h4>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-500">🤗 Feels Like</p>
            <h4 className="text-xl font-semibold">
              {Math.round(weather.main.feels_like)}°C
            </h4>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-500">🌡 Pressure</p>
            <h4 className="text-xl font-semibold">
              {weather.main.pressure} hPa
            </h4>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
  );
}
