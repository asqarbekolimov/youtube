import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-secondary rounded py-1 px-2 ml-[30%]">
      <input
        className="outline-none border-none w-[350px]"
        type="text"
        placeholder="Search..."
      />
      <BiSearch className="cursor-pointer" />
    </div>
  );
};

export default SearchBar;
