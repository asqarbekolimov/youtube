import React, { useEffect, useState } from "react";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <div className="p-2 h-[90vh]">
        <div className="container max-w-[90%]">
          <h4 className="flex gap-2 text-2xl font-bold mb-2">
            {selectedCategory} <span className="text-secondary">videos</span>
          </h4>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Main;
