import axios from "axios";

let service: any = {};
if (process.env.NODE_ENV === "development") {
    service = axios.create({
        baseURL: "/api",
        timeout: 50000,
    });
} else {
    // 生产环境下
    service = axios.create({
        baseURL: "/api",
        timeout: 50000,
    });
}

service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    },
);

service.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        console.error("error:" + error); // for debug
        return Promise.reject(error);
    },
);

export default service;
