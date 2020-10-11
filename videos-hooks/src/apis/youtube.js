import axios from "axios";

const KEY = "AIzaSyBoKVw7jqPtuldjW65qZL4977Ibdyzpvg0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
