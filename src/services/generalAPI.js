import axios from "axios";

export const userLogin = async ({ method, headers, url, data }) => {
  try {
    const payload = {
      method,
      url,
      headers,
      data,
    };
    const response = await axios(payload);
    return response;
  } catch (error) {
    console.log("yahan =====================================>", error);
    return {
      data: { message: "Whoop! Something went wrong", success: false },
    };
  }
};
