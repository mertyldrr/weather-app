import { CELSIUS_SYMBOL, WeatherData } from "../types";

type Props = {
  weatherData: WeatherData;
};

export const WeatherInformation = (props: Props) => {
  const { weatherData } = props;
  return (
    <div className="flex flex-col mt-10">
      <p className="font-poppins text-4xl text-white">
        Weather in {weatherData.name}
      </p>
      <p className="font-poppins font-semibold text-6xl text-white">
        {`${weatherData.temp_c} ${CELSIUS_SYMBOL}`}
      </p>
      <div className="flex flex-row items-center">
        <img
          className="w-12"
          src={weatherData.condition.icon}
          alt={weatherData.condition.text}
        />
        <p className="font-poppins text-xl text-white">
          {weatherData.condition.text}
        </p>
      </div>
      <p className="font-poppins font-light text-lg text-white">
        {`Humidity: ${weatherData.humidity}%`}
      </p>
      <p className="font-poppins font-light text-lg text-white">
        {`Wind speed: ${weatherData.temp_c} km/hr`}
      </p>
    </div>
  );
};
