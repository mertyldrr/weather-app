import axios from "axios";
import { useCallback, useEffect } from "react";
import {
  CurrentWeatherData,
  ForecastDay,
  WeatherChoice,
  WeatherOptionalParams,
} from "../types";
import { CurrentWeather } from "./CurrentWeather";
import { SearchBar } from "./SearchBar";
import { WeatherTabs } from "./WeatherTabs";
import { useSearchStore, useTabStore, useWeatherStore } from "../store/store";
import { Forecast } from "./Forecast";
import { DayTabs } from "./DayTabs";

export const Container = () => {
  const lastSearch = useSearchStore((state) => state.lastSearch);
  const activeTab = useTabStore((state) => state.forecastTypeActiveTab);
  const {
    currentWeather,
    forecastWeather,
    updateCurrentWeather,
    updateForecastWeather,
  } = useWeatherStore((state) => state);

  const fetchCurrentWeather = useCallback(
    async (
      cityName: string,
      airQuality?: WeatherOptionalParams
    ): Promise<void> => {
      const res = await axios.get(
        `${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&aqi=${airQuality}`
      );
      const { name, country, localTime } = res.data.location;
      const { temp_c, temp_f, condition, wind_mph, wind_kph, humidity, cloud } =
        res.data.current;
      const mergedObject: CurrentWeatherData = {
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
      updateCurrentWeather(mergedObject);
    },
    [updateCurrentWeather]
  );

  const fetchWeatherForecast = useCallback(
    async (
      cityName: string,
      days = 3,
      airQuality?: WeatherOptionalParams,
      weatherAlerts?: WeatherOptionalParams
    ): Promise<void> => {
      const res = await axios.get(
        `${process.env.REACT_APP_WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}&days=${days}&aqi=${airQuality}&alerts=${weatherAlerts}`
      );
      let forecastArray: ForecastDay[] = [];
      const { forecast } = res.data;
      const { forecastday } = forecast;
      for (let i = 0; i < days; i++) {
        const { date, day, hour } = forecastday[i];
        const { maxtemp_f, mintemp_f, maxtemp_c, mintemp_c, condition } = day;

        let forecast: ForecastDay = {
          date,
          maxtemp_f,
          mintemp_f,
          maxtemp_c,
          mintemp_c,
          condition,
          hour,
        };
        forecastArray.push(forecast);
      }
      updateForecastWeather(forecastArray);
    },
    [updateForecastWeather]
  );
  useEffect(() => {
    fetchCurrentWeather("Munich");
  }, [fetchCurrentWeather]);

  useEffect(() => {
    activeTab === WeatherChoice.Current
      ? fetchCurrentWeather(lastSearch)
      : fetchWeatherForecast(lastSearch);
  }, [activeTab, lastSearch, fetchCurrentWeather, fetchWeatherForecast]);

  return (
    <div className="w-screen h-screen bg-munich bg-cover flex justify-center items-center">
      <div className="w-full lg:w-1/2 bg-black rounded-2xl p-8 opacity-80">
        <SearchBar fetchCurrentWeather={fetchCurrentWeather} />
        <div>
          <WeatherTabs />
          {activeTab === WeatherChoice.Current
            ? currentWeather && <CurrentWeather />
            : forecastWeather && (
                <div>
                  <DayTabs />
                  <Forecast />
                </div>
              )}
        </div>
      </div>
    </div>
  );
};
