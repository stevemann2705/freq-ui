import axios from "axios";

const baseUrl = process.env.REACT_APP_FREQTRADE_API_URL;
console.log("baseUrl", baseUrl);

export default function createAxois(options = {}) {
    const {
        headers = {}
    } = options;

    if (localStorage.access_token) {
        headers.Authorization = `Bearer ${localStorage.token}`;
    }
    headers["Access-Control-Allow-Origin"] = "https://frequi.freqtrade.io";
    return axios.create({
        baseURL: baseUrl,
        headers: headers
    });
}

// let headers = initHeaders();
