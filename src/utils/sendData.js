import axios from "axios";

const sendData = async (URL, body) => {
  try {
    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    };

    const data = await axios.post(URL, body);

    return { data: data.data };
  } catch (error) {
    return { error: "Failed to send data" };
  }
};

export default sendData;
