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
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="w-full h-16 relative rounded-2xl">
        <input
          type="text"
          onChange={(e) => updateSearchText(e.target.value)}
          value={searchText}
          className=" font-poppins text-gray-400 pl-5 w-full h-full text-md rounded-lg bg-gray-700 placeholder:text-white "
          placeholder="Enter a city..."
          required
        />
        <button>
          <FaSearch
            className="absolute opacity-90 right-0 top-4 mr-3 p-2 select-none bg-gray-100 rounded-2xl"
            size={36}
          />
        </button>
      </div>
    </form>
  );
};
