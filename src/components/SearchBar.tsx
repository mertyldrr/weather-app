import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  fetchWeather: (cityName: string, airQuality?: string) => Promise<void>;
};

export const SearchBar = ({ fetchWeather }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const updateSearchText = (text: string) => {
    setSearchText(text);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchWeather(searchText);
  };
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="w-full h-16 relative rounded-2xl">
        <input
          type="text"
          onChange={(e) => updateSearchText(e.target.value)}
          value={searchText}
          className=" font-poppins text-gray-400 pl-5 w-full h-full text-md rounded-lg bg-gray-700 placeholder:text-white "
          placeholder="Search..."
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
