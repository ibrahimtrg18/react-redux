import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RJlLTndzXc0j9Q1O9ozKBm7AiXQX8NUdBXVozpvqPLE",
  },
});
