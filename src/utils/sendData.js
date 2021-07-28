import axios from "axios";

const sendData = async (URL, body) => {
  try {
    const data = await axios.post(URL, body);

    return { data: data.data };
  } catch (error) {
    return { error: "Failed to send data" };
  }
};

export default sendData;
