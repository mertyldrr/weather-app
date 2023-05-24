import { useTabStore, useWeatherStore } from "../store/store";
import { formatDay } from "../utils/utils";

export const DayTabs = () => {
  const dayActiveTab = useTabStore((state) => state.dayActiveTab);
  const updateForecastDayTab = useTabStore(
    (state) => state.updateForecastDayTab
  );
  const forecastData = useWeatherStore((state) => state.forecastWeather);

  if (!forecastData) return null;

  return (
    <div className="tabs flex justify-around">
      {forecastData.map((forecastDay, index) => (
        <button
          key={forecastDay.date}
          className={`tab p-0 text-white ${
            dayActiveTab === index ? "tab-active opacity-90" : "opacity-50"
          }`}
          onClick={() => updateForecastDayTab(index)}
        >
          <p>{formatDay(forecastDay.date)}</p>
        </button>
      ))}
    </div>
  );
};
