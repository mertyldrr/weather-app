export type WeatherData = {
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

export type Condition = {
  text: string;
  icon: string;
};

export const CELSIUS_SYMBOL = "\u00B0C";
