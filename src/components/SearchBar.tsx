import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchStore } from "../store/store";
import { WeatherOptionalParams } from "../types";

type Props = {
  fetchCurrentWeather: (
    cityName: string,
    airQuality?: WeatherOptionalParams
  ) => Promise<void>;
};

export const SearchBar = ({ fetchCurrentWeather }: Props) => {
  const searchText = useSearchStore((state) => state.searchText);
  const updateLastSearch = useSearchStore((state) => state.updateLastSearch);
  const updateSearchText = useSearchStore((state) => state.updateSearchText);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateLastSearch(searchText);
    await fetchCurrentWeather(searchText);
    updateSearchText("");
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="w-full lg: h-12 lg:h-16  relative rounded-2xl">
        <input
          type="text"
          onChange={(e) => updateSearchText(e.target.value)}
          value={searchText}
          className="font-poppins pl-5 w-full h-full text-sm lg:text-base rounded-lg text-white opacity-80 bg-gray-700 placeholder:text-gray-500 "
          placeholder="Enter a city..."
          autoComplete="off"
          required
        />
        <button>
          <FaSearch className="w-6 h-6 lg:w-9 lg:h-9 absolute opacity-90 right-0 top-3 lg:top-4 mr-3 p-2 select-none bg-gray-100 rounded-2xl" />
        </button>
      </div>
    </form>
  );
};
