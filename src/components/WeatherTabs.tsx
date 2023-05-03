import { useTabStore } from "../store/store";
import { WeatherChoice } from "../types";

export const WeatherTabs = () => {
  const {
    forecastTypeActiveTab: activeTab,
    updateForecastActiveTab: updateActiveTab,
  } = useTabStore((state) => state);
  return (
    <div className="tabs py-2">
      <button
        className={`tab text-base px-4 ${
          activeTab === WeatherChoice.Current ? "tab-active" : ""
        }`}
        onClick={() => updateActiveTab(WeatherChoice.Current)}
      >
        Current
      </button>
      <button
        className={`tab text-base px-4 ${
          activeTab === WeatherChoice.Forecast ? "tab-active" : ""
        }`}
        onClick={() => updateActiveTab(WeatherChoice.Forecast)}
      >
        Forecast
      </button>
    </div>
  );
};
