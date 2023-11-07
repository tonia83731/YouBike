import axios from "axios";

const baseURL =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

export const getBikeInfo = async() => {
  try {
    const res = await axios.get(baseURL)
    return res.data
  } catch (error) {
    console.error("[Get bike info failed]:", error);
  }
}
