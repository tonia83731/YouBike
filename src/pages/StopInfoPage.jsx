import { useState, useEffect } from 'react'

import Header from '../components/Header'
import { MainSection, MainTitle } from './InstructionPage'
import { getBikeInfo } from '../api/getYoubikeInfo'
import StopFilter from '../components/main/StopFilter'
import StopTable from '../components/main/StopTable'
import Pagination from '../components/main/pagination/pagination'


export default function StopInfoPage () {
  const [stopData, setStopData] = useState([])
  const [area, setArea] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const perPage = 10
  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const stop = stopData.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(stopData.length / perPage)
  const nums = [...Array(nPage + 1).keys()].slice(1)

  const handleArrowClick = (e) => {
    console.log(e.target.id)
    if(e.target.id === 'prev' && currentPage !== 1){
      setCurrentPage(currentPage - 1)
    } else if (e.target.id === 'next' && currentPage !== nums[nums.length - 1]){
      setCurrentPage(currentPage + 1);
    }
  }
  const handlePageClick = (num) => {
    setCurrentPage(num)
  }

  useEffect(() => {
    const getBikeInfoAsync = async () => {
      const res = await getBikeInfo()
      // console.log(res)
      setStopData([...res])
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
        <StopFilter props={area} />
        <StopTable props={stop} />
        <Pagination
          nums={nums}
          currentPage={currentPage}
          onArrowClick={handleArrowClick}
          onPageClick={handlePageClick}
        />
      </MainSection>
    </>
  );
}
