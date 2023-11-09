import { useState, useEffect } from 'react'

import Header from '../components/Header'
import { MainSection, MainTitle } from './InstructionPage'
import { getBikeInfo } from '../api/getYoubikeInfo'
import StopFilter from '../components/main/StopFilter'
import StopSearch from '../components/main/StopSearch'
import StopTable from '../components/main/StopTable'
import StopSelection from '../components/main/StopSelection'


export default function StopInfoPage () {
  const [stopData, setStopData] = useState([])
  const [area, setArea] = useState([])

  useEffect(() => {
    const getBikeInfoAsync = async () => {
      const res = await getBikeInfo()
      // console.log(res)
      const set = new Set()
      res.map((data) => {
        set.add(data.sarea)
      })
      // console.log(set)
      setArea([...set])
    }
    getBikeInfoAsync()
  }, [])
  return (
    <>
      <Header />
      <MainSection>
        <MainTitle>站點資訊</MainTitle>
        <StopFilter props={area}/>
        <StopTable/>
      </MainSection>
    </>
  )
}
