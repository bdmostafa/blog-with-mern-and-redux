import axios from "axios";

const url = `http://localhost:4200/posts`;

export const fetchPosts = () => axios.get(url);