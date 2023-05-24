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
        className={`tab text-base px-4 text-white ${
          activeTab === WeatherChoice.Current
            ? "tab-active opacity-90"
            : "opacity-50"
        }`}
        onClick={() => updateActiveTab(WeatherChoice.Current)}
      >
        Current
      </button>
      <button
        className={`tab text-base px-4 text-white ${
          activeTab === WeatherChoice.Forecast
            ? "tab-active opacity-90"
            : "opacity-50"
        }`}
        onClick={() => updateActiveTab(WeatherChoice.Forecast)}
      >
        Forecast
      </button>
    </div>
  );
};
