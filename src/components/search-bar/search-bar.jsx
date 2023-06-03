import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center border border-secondary rounded py-1 px-2 ml-10 md:ml-20 lg:ml-[30%]"
    >
      <input
        className="outline-none border-none w-[200px] md:w-[350px]"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div onClick={submitHandler}>
        <BiSearch className="cursor-pointer" />
      </div>
    </form>
  );
};

export default SearchBar;
