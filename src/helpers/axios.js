import axios from "axios";

const baseUrl = process.env.REACT_APP_FREQTRADE_API_URL;
console.log("baseUrl", baseUrl);

export default function createAxios(options = {}) {
    const {
        headers = {}
    } = options;

    if (localStorage.access_token) {
        headers.Authorization = `Bearer ${localStorage.access_token}`;
    }
    headers["Access-Control-Allow-Origin"] = "https://frequi.freqtrade.io";
    let axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: headers
    });
    axiosInstance.interceptors.response.use(
        (response) => {
            console.log("axios interceptor response", response);
            return response;
        },
        function (error) {
            const originalRequest = error.config;
            let refreshToken = localStorage.getItem("refresh_token");
            if (
                refreshToken &&
                error.response.status === 401 &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true;
                localStorage.removeItem("access_token");
                if (originalRequest.url === "/token/refresh") {
                    localStorage.removeItem("refresh_token");
                    window.location = "/auth/login";
                }
                const options = {
                    headers: {"Authorization": `Bearer ${refreshToken}`}
                };
                return createAxios(options)
                    .post("/token/refresh")
                    .then((res) => {
                        if (res.status === 200) {
                            localStorage.setItem("access_token", res.data["access_token"]);
                            console.log("Access token refreshed!");
                            if (localStorage.access_token) {
                                originalRequest.headers.Authorization = `Bearer ${localStorage.access_token}`;
                            }
                            return axios(originalRequest);
                        }
                    });
            } else {
                window.location = "/auth/login";
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
}

//response interceptor to refresh token on receiving token expired error
// axios.interceptors.response

// let headers = initHeaders();
