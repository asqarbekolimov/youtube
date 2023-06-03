import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Videos } from "../";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="h-[90vh]">
      <div className="container">
        <h4 className="font-bold">
          Search results from <span className="text-red-600">{id}</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Search;
