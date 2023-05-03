import {
  WeatherChoice,
  DayChoice,
  CurrentWeatherData,
  ForecastDay,
} from "../types";

export type SearchStore = {
  searchText: string;
  lastSearch: string;
  updateLastSearch: (text: string) => void;
  updateSearchText: (text: string) => void;
};

export type ActiveTabStore = {
  forecastTypeActiveTab: WeatherChoice;
  dayActiveTab: DayChoice;
  updateForecastActiveTab: (tab: number) => void;
  updateForecastDayTab: (tab: number) => void;
};

export type WeatherStore = {
  currentWeather: CurrentWeatherData | null;
  forecastWeather: ForecastDay[] | null;
  updateCurrentWeather: (data: CurrentWeatherData) => void;
  updateForecastWeather: (data: ForecastDay[]) => void;
};
