import { GLOBAL_URL } from "./Constant";
import axios from "axios";

const httpClient = axios.create({
  baseURL: `${GLOBAL_URL}/api/`,
});

export function setDefaultHeader(header, value) {
  httpClient.defaults.headers.common[header] = value;
}

export async function apiCall(
  method,
  url,
  data,
  header = {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  }
) {
  try {
    const response = await httpClient({
      method,
      url,
      data,
      headers: header,
    });
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      return response;
    }
    if (response.status === 202) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return error.response;
      }
      return error.response;
    } else if (error.request) {
      return error.response;
    } else {
    }
    // return error;
    return error.response;
  }
}
