import axios from "axios";

export const userLogin = async ({ method, headers, url, data }) => {
  try {
    const payload = {
      method,
      url,
      headers,
      data,
    };
    // const response = await axios.post("http://localhost:4000/user/login", data);
    const response = await axios(payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
