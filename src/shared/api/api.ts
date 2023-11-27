import axios from "axios";

const instance = axios.create({
  baseURL: "https://example.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Для GET запросов
export const fetchData = (url: string, params = {}) => {
  return instance.get(url, { params });
};

// Для POST запросов
export const createData = (url: string, data: any) => {
  return instance.post(url, data);
};

// Для PUT запросов
export const updateData = (url: string, data: any) => {
  return instance.put(url, data);
};

// Для DELETE запросов
export const deleteData = (url: string) => {
  return instance.delete(url);
};

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
