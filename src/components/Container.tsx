import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherData } from "../types";
import { WeatherInformation } from "./WeatherInformation";
import { SearchBar } from "./SearchBar";

export const Container = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const handleWeatherData = (weatherData: WeatherData) => {
    setWeatherData(weatherData);
  };

  const fetchWeather = async (
    cityName: string,
    airQuality?: string
  ): Promise<void> => {
    const res = await axios.get(
      `${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&aqi=${airQuality}`,
      {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": true,
        },
      }
    );
    const { name, country, localTime } = res.data.location;
    const { temp_c, temp_f, condition, wind_mph, wind_kph, humidity, cloud } =
      res.data.current;
    const mergedObject: WeatherData = {
      name,
      country,
      localTime,
      temp_c,
      temp_f,
      condition,
      wind_mph,
      wind_kph,
      humidity,
      cloudCoverage: cloud,
    };
    handleWeatherData(mergedObject);
  };

  useEffect(() => {
    fetchWeather("Munich");
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-1/2 h-2/5 bg-black rounded-2xl p-8">
        <SearchBar fetchWeather={fetchWeather} />
        {weatherData && <WeatherInformation weatherData={weatherData} />}
      </div>
    </div>
  );
};
