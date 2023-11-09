import { getBikeInfo } from "../api/getYoubikeInfo";

const getBikeInfoAsync = async () => {
  const res = await getBikeInfo()
  console.log(res)
}

export function getArea() {

}