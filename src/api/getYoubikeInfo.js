import axios from 'axios'

const taipeiBaseURL =
  'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
const newTaipeiBaseURL =
  'https://data.ntpc.gov.tw/api/datasets/010E5B15-3823-4B20-B401-B1CF000550C5/json?page=0&size=1000'
const getTaoyuanBaseURL = 'https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json'

export const getTaipeiBikeInfo = async () => {
  try {
    const res = await axios.get(taipeiBaseURL)
    return res.data
  } catch (error) {
    console.error('[Get Taipei bike info failed]:', error)
  }
}

export const getNewTaipeiBikeInfo = async () => {
  try {
    const res = await axios.get(newTaipeiBaseURL)
    return res.data
  } catch (error) {
    console.error('[Get New Taipei bike info failed]:', error)
  }
}

export const getTaoyuanBikeInfo = async () => {
  try {
    const res = await axios.get(getTaoyuanBaseURL)
    return res.data.result.records
  } catch (error) {
    console.error('[Get Taoyuan bike info failed]:', error)
  }
}
