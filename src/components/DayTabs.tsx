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
          className={`tab p-0 ${dayActiveTab === index ? "tab-active" : ""}`}
          onClick={() => updateForecastDayTab(index)}
        >
          <p>{formatDay(forecastDay.date)}</p>
        </button>
      ))}
    </div>
  );
};
