import axios from "axios";
import qs from "query-string";

// Setup những cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNiIsIkhldEhhblN0cmluZyI6IjEzLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NTYxOTIwMDAwMCIsIm5iZiI6MTYzMzE5NDAwMCwiZXhwIjoxNjY1NzY2ODAwfQ.TMg-RWGpT6_kH-eG3Pbw5j_8yWUP84LrkWZAFj-Drfk",
  },
  // Override lại cách axios set params lên url
  paramsSerializer: (params) => {
    // const filtered = Object.entries(params)
    //   .filter(([key, value]) => {
    //     return value !== null && value !== undefined && value !== "";
    //   })
    //   .map(([key, value]) => {
    //     return `${key}=${value}`;
    //   });
    // return filtered.length > 0 ? filtered.join("&") : "";

    return qs.stringify(params, { skipEmptyString: true, skipNull: true });
  },
});

export default axiosClient;
