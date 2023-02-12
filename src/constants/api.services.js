import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "0dc4f05c9amsh7b29b5f4a94e77ap19fc31jsn211f19c3407d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
