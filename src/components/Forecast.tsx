import { useTabStore, useWeatherStore } from "../store/store";
import { CELSIUS_SYMBOL } from "../types";
import { formatHour } from "../utils/utils";

export const Forecast = () => {
  const forecastData = useWeatherStore((state) => state.forecastWeather);
  const activeDay = useTabStore((state) => state.dayActiveTab);
  return (
    <div>
      <div className="flex overflow-x-auto scrollbar-none space-x-8 py-2">
        {forecastData![activeDay].hour.map((hour) => (
          <div className="flex flex-col" key={hour.time_epoch}>
            <div>{formatHour(hour.time_epoch)} </div>
            <img
              className="w-8"
              src={hour.condition.icon}
              alt={hour.condition.text}
            />
          </div>
        ))}
      </div>

      <p className="font-poppins font text-2xl mt-6">
        {`Max temp: ${forecastData![activeDay].maxtemp_c} ${CELSIUS_SYMBOL}`}
      </p>
      <p className="font-poppins font-normal text-2xl mt-4">
        {`Min temp: ${forecastData![activeDay].mintemp_c} ${CELSIUS_SYMBOL}`}
      </p>
    </div>
  );
};
