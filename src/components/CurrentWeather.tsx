import { useWeatherStore } from "../store/store";
import { CELSIUS_SYMBOL } from "../types";

export const CurrentWeather = () => {
  const currentWeather = useWeatherStore((state) => state.currentWeather!);
  return (
    <div className="flex flex-col mt-4 text-white opacity-80">
      <p className="font-poppins text-2xl lg:text-4xl">
        Weather in {currentWeather.name}
      </p>
      <p className="font-poppins font-semibold text-3xl lg:text-6xl">
        {`${currentWeather.temp_c} ${CELSIUS_SYMBOL}`}
      </p>
      <div className="flex flex-row items-center">
        <img
          className="w-12"
          src={currentWeather.condition.icon}
          alt={currentWeather.condition.text}
        />
        <p className="font-poppins text-base lg:text-lg">
          {currentWeather.condition.text}
        </p>
      </div>
      <p className="font-poppins font-light text-base lg:text-lg">
        {`Humidity: ${currentWeather.humidity}%`}
      </p>
      <p className="font-poppins font-light text-base lg:text-lg">
        {`Wind speed: ${currentWeather.temp_c} km/hr`}
      </p>
    </div>
  );
};
