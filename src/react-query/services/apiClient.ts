import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    // debugger; // when this method is called, the debugger will stop here
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  }
}

export default APIClient;