import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <form className="flex justify-center">
      <div className="w-full h-16 relative rounded-2xl">
        <input
          type="text"
          id="simple-search"
          className=" font-poppins text-gray-400 pl-5 w-full h-full text-md rounded-lg bg-gray-700 placeholder:text-white "
          placeholder="Search..."
          required
        />
        <FaSearch
          className="absolute opacity-90 right-0 top-4 mr-3 p-2 select-none bg-gray-100 rounded-2xl"
          size={36}
        />
      </div>
    </form>
  );
};
