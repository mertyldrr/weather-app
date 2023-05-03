export type CurrentWeatherData = {
  name: string;
  country: string;
  localTime: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  humidity: number;
  cloudCoverage: number;
};

export type ForecastDay = {
  date: string;
  maxtemp_f: number;
  mintemp_f: number;
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
  hour: Array<any>;
};

export type Hour = {
  timestamp: number;
  temp_c: number;
  temp_f: number;
  day: number;
  condition: Condition;
};

export type Condition = {
  text: string;
  icon: string;
};

export enum WeatherOptionalParams {
  Yes = "yes",
  No = "no",
}

export enum WeatherChoice {
  Current = 1,
  Forecast = 2,
}
export enum DayChoice {
  Current = 0,
  Tomorrow = 1,
  DayAfterTmrw = 2,
}
export const CELSIUS_SYMBOL = "\u00B0C";
