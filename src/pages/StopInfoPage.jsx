/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colorList } from '../styled/colorLists'
import { breakpoints } from '../styled/breakpoints'

import { taiwanCountiesAndCities } from '../data/ubikecityData'
import Header from '../components/Header'
import { MainSection, MainTitle } from './InstructionPage'
import { getTaipeiBikeInfo, getNewTaipeiBikeInfo, getTaoyuanBikeInfo } from '../api/getYoubikeInfo'
import StopFilter from '../components/main/StopFilter'
import StopTable from '../components/main/StopTable'
import Pagination from '../components/main/pagination/pagination'
import OptionModal from '../components/main/Modal/OptionModal'

export default function StopInfoPage () {
  const [isLoading, setIsLoading] = useState(true)
  const [stopData, setStopData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [area, setArea] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isAllChecked, setAllChecked] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [selectValue, setSelectValue] = useState('選擇縣市')
  const [isToggle, setIsToggle] = useState(false)

  const perPage = 10
  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const stop = filterData.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(filterData.length / perPage)
  const nums = [...Array(nPage + 1).keys()].slice(1)

  const handleMoreOptionClick = () => {
    setIsToggle(!isToggle)
  }
  const handleToggleClose = () => {
    setIsToggle(false)
  }
  const handleDropdown = () => {
    setIsActive(!isActive)
  }
  const handleOptionClick = (e) => {
    // console.log(e.target.value)
    setSelectValue(e.target.value)
    setIsActive(false)
  }
  const handleCityChange = (city) => {
    setAllChecked(false)
    if (city === '台北市') {
      const filterStop = stopData.filter((data) => data.city === '台北市')
      // console.log(filterData)
      setFilterData(filterStop)
    } else if (city === '新北市') {
      const filterStop = stopData.filter((data) => data.city === '新北市')
      // console.log(filterData)
      setFilterData(filterStop)
    } else if (city === '桃園市') {
      const filterStop = stopData.filter((data) => data.city === '桃園市')
      // console.log(filterData)
      setFilterData(filterStop)
    } else {
      setFilterData([])
    }
  }
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleAllChange = () => {
    setAllChecked(true)
    setSearchValue('')
    setFilterData(stopData)
    setSelectValue('選擇縣市')
  }
  const handleDistrictChange = (district) => {
    console.log(district)
  }
  const handleSearchClick = () => {
    if (searchValue === '') return
    const filterStop = stopData.filter((stop) => {
      return (
        stop.city.includes(searchValue) ||
        stop.sarea.includes(searchValue) ||
        stop.sna.includes(searchValue)
      )
    })
    setAllChecked(false)
    setFilterData(filterStop)
    const selectSet = new Set()
    filterStop.map((stop) => selectSet.add(stop.city))
    const selectArr = [...selectSet]
    const city = taiwanCountiesAndCities.find((city) => city.chinese.includes(searchValue) || city.english.toLowerCase().includes(searchValue))
    if (selectArr.length > 0) {
      setSelectValue(selectArr[0])
    } else if (city !== undefined) {
      setSelectValue(city.chinese)
    } else {
      setSelectValue('選擇縣市')
    }
  }
  const handleSearchKeyDown = (e) => {
    if (e.target.value === '') return
    if (e.key === 'Enter') {
      const filterStop = stopData.filter((stop) => {
        return (
          stop.city.includes(searchValue) ||
          stop.sarea.includes(searchValue) ||
          stop.sna.includes(searchValue)
        )
      })
      setFilterData(filterStop)
      setAllChecked(false)
      const selectSet = new Set()
      filterStop.map((stop) => selectSet.add(stop.city))
      const selectArr = [...selectSet]
      const city = taiwanCountiesAndCities.find(
        (city) =>
          city.chinese.includes(searchValue) ||
          city.english.toLowerCase().includes(searchValue)
      )

      if (selectArr.length > 0) {
        setSelectValue(selectArr[0])
      } else if (city !== undefined) {
        setSelectValue(city.chinese)
      } else {
        setSelectValue('選擇縣市')
      }
    }
  }
  const handleArrowClick = (e) => {
    // console.log(e.target.id)
    if (e.target.id === 'prev' && currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    } else if (
      e.target.id === 'next' &&
      currentPage !== nums[nums.length - 1]
    ) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePageClick = (num) => {
    setCurrentPage(num)
  }

  useEffect(() => {
    const getBikeInfoAsync = async () => {
      try {
        const res = await getTaipeiBikeInfo()
        const res2 = await getNewTaipeiBikeInfo()
        const res3 = await getTaoyuanBikeInfo()
        const taipei = res.map((obj) => ({
          ...obj,
          city: '台北市'
        }))
        const newTaipei = res2.map((obj) => ({
          ...obj, city: '新北市'
        }))
        const taoyuan = res3.map((obj) => ({
          ...obj,
          city: '桃園市'
        }))

        setStopData([...taipei, ...newTaipei, ...taoyuan])
        setFilterData([...taipei, ...newTaipei, ...taoyuan])
        const set = new Set()
        res.map((data) => {
          set.add(data.sarea)
        })
        // res2.map((data) => {
        //   set.add(data.sarea)
        // })
        // console.log(set)
        setArea([...set])
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getBikeInfoAsync()
  }, [])
  if (isLoading === true) {
    return (
      <>
        <Header />
        <MainSection>
          <MainTitle>站點資訊</MainTitle>
          <Loading>Loading...</Loading>
        </MainSection>
      </>
    )
  }
  return (
    <>
      <Header />
      <MainSection>
        <MainTitle>站點資訊</MainTitle>
        {isToggle && <OptionModal props={area} onToggleClose={handleToggleClose}/>}
        <StopFilter
          props={area}
          onCityChange={handleCityChange}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearchClick={handleSearchClick}
          onSearchKeyDown={handleSearchKeyDown}
          isAllChecked={isAllChecked}
          onAllChange={handleAllChange}
          onDistrictChange={handleDistrictChange}
          isActive={isActive}
          selectValue={selectValue}
          onOptionClick={handleOptionClick}
          onDropdown={handleDropdown}
          cityProps={taiwanCountiesAndCities}
          onMoreOptionClick={handleMoreOptionClick}
        />
        <StopTable props={stop} />
        <Pagination
          nums={nums}
          currentPage={currentPage}
          onArrowClick={handleArrowClick}
          onPageClick={handlePageClick}
        />
      </MainSection>
    </>
  )
}

const Loading = styled.p`
  color: ${colorList.dark};
  font-size: 16px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
