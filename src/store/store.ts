import { create } from "zustand";
import { CurrentWeatherData, ForecastDay } from "../types";
import { ActiveTabStore, SearchStore, WeatherStore } from "./types";

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: "",
  lastSearch: "Munich",
  updateLastSearch: (text) => set(() => ({ lastSearch: text })),
  updateSearchText: (text) => set(() => ({ searchText: text })),
}));

export const useTabStore = create<ActiveTabStore>((set) => ({
  forecastTypeActiveTab: 1,
  dayActiveTab: 0,
  updateForecastActiveTab: (tab) => set(() => ({ forecastTypeActiveTab: tab })),
  updateForecastDayTab: (tab) => set(() => ({ dayActiveTab: tab })),
}));

export const useWeatherStore = create<WeatherStore>((set) => ({
  currentWeather: null,
  forecastWeather: null,
  updateCurrentWeather: (weatherData: CurrentWeatherData) =>
    set(() => ({ currentWeather: weatherData })),
  updateForecastWeather: (forecastData: ForecastDay[]) =>
    set(() => ({ forecastWeather: forecastData })),
}));
