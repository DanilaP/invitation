import axios from "axios";

const $api = axios.create({
    baseURL: "https://summit.7rlines.com/api/"
});

export default $api;
