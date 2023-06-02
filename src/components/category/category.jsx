import React from "react";
import { category } from "../constants";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <div className="container  max-w-full overflow-x-auto flex gap-4 h-auto mt-5">
      {category.map((item) => (
        <button
          key={item.name}
          className={`px-4 py-1 rounded hover:bg-red-700 hover:text-white/80 transition-all duration-200 ${
            item.name === selectedCategory && "bg-red-600 text-white"
          }`}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
