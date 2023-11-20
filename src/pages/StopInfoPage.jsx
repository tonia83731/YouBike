/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colorList } from '../styled/colorLists'
import { breakpoints } from '../styled/breakpoints'

import { taiwanCountiesAndCities } from '../data/ubikecityData'
import Header from '../components/Header'
import { MainSection, MainTitle } from './InstructionPage'
import {
  getTaipeiBikeInfo,
  getNewTaipeiBikeInfo,
  getTaoyuanBikeInfo
} from '../api/getYoubikeInfo'
import StopFilter from '../components/main/StopFilter'
import StopTable from '../components/main/StopTable'
import Pagination from '../components/main/pagination/pagination'
import OptionModal from '../components/main/Modal/OptionModal'

export default function StopInfoPage () {
  const [isLoading, setIsLoading] = useState(true)
  const [stopData, setStopData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [area, setArea] = useState([])
  const [sarea, setSarea] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isAllChecked, setAllChecked] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [districtCheckItems, setDistrictCheckItems] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [selectValue, setSelectValue] = useState('選擇縣市')
  const [isToggle, setIsToggle] = useState(false)

  // Pagination setting here
  const perPage = 10
  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const stop = filterData.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(filterData.length / perPage)
  const nums = [...Array(nPage + 1).keys()].slice(1)

  // More option toggle open here
  const handleMoreOptionClick = () => {
    setIsToggle(!isToggle)
  }
  // More option toggle close here
  const handleToggleClose = () => {
    setIsToggle(false)
  }
  // Dropdown menu bar active here
  const handleDropdown = () => {
    setIsActive(!isActive)
  }
  // Dropdown menu option click here
  const handleOptionClick = (e) => {
    setSelectValue(e.target.value)
    setIsActive(false)
  }
  // Dropdown menu option change here
  const handleCityChange = (city) => {
    setAllChecked(false)
    setDistrictCheckItems({})
    if (city === '台北市') {
      const filterStop = stopData.filter((data) => data.city === '台北市')
      const filterArea = area.filter((area) => area.city === '台北市')
      const checkItems = filterStop.reduce((acc, stop) => {
        acc[stop.sarea] = true
        return acc
      }, {})
      setFilterData(filterStop)
      setSarea(filterArea)
      setDistrictCheckItems(checkItems)
    } else if (city === '新北市') {
      const filterStop = stopData.filter((data) => data.city === '新北市')
      const filterArea = area.filter((area) => area.city === '新北市')
      const checkItems = filterStop.reduce((acc, stop) => {
        acc[stop.sarea] = true
        return acc
      }, {})
      setFilterData(filterStop)
      setSarea(filterArea)
      setDistrictCheckItems(checkItems)
    } else if (city === '桃園市') {
      const filterStop = stopData.filter((data) => data.city === '桃園市')
      const filterArea = area.filter((area) => area.city === '桃園市')
      const checkItems = filterStop.reduce((acc, stop) => {
        acc[stop.sarea] = true
        return acc
      }, {})
      setFilterData(filterStop)
      setSarea(filterArea)
      setDistrictCheckItems(checkItems)
    } else {
      setFilterData([])
      setSarea([])
      setDistrictCheckItems({})
    }
  }
  // '全部勾選' option change => when click then everything change back to default
  const handleAllChange = () => {
    setAllChecked(true)
    setSearchValue('')
    setFilterData(stopData)
    setSelectValue('選擇縣市')
    setDistrictCheckItems({})
    const filterArea = area.filter((area) => area.city === '台北市')
    setSarea(filterArea)
  }
  // Option checked/unchecked here
  const handleDistrictChange = (district, isChecked) => {
    // console.log(district, isChecked)
    setDistrictCheckItems((prevValues) => ({
      ...prevValues,
      [district]: isChecked
    }))
    setDistrictCheckItems((prevValues) => {
      const checkedDistricts = Object.keys(prevValues).filter(
        (district) => prevValues[district]
      )
      if (checkedDistricts.length === 0) {
        setAllChecked(true)
        setSearchValue('')
        setFilterData(stopData)
        setSelectValue('選擇縣市')
        return prevValues
      }
      if (checkedDistricts.length > 0) setAllChecked(false)

      // Use checkedDistricts directly to filter stopData
      const filterData = stopData.filter((stop) =>
        checkedDistricts.includes(stop.sarea)
      )

      setFilterData(filterData)

      const selectSet = new Set()
      filterData.forEach((stop) => selectSet.add(stop.city))
      const selectArr = [...selectSet]
      setSelectValue(selectArr[0])

      // Return the updated state
      return prevValues
    })
    // console.log(districtCheckItems)
  }
  // Search bar input change here
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  // Search bar with button click here
  const handleSearchClick = () => {
    if (searchValue === '') return
    const filterStop = stopData.filter((stop) => {
      return (
        stop.city.includes(searchValue) ||
        stop.sarea.includes(searchValue) ||
        stop.sna.includes(searchValue)
      )
    })
    // console.log(filterStop)
    setAllChecked(false)
    setFilterData(filterStop)
    const selectSet = new Set()
    // const checkedSet = new Set()
    filterStop.map((stop) => selectSet.add(stop.city))
    const checkItems = filterStop.reduce((acc, stop) => {
      acc[stop.sarea] = true
      return acc
    }, {})
    const selectArr = [...selectSet]
    const city = taiwanCountiesAndCities.find(
      (city) =>
        city.chinese.includes(searchValue) ||
        city.english.toLowerCase().includes(searchValue)
    )
    setDistrictCheckItems(checkItems)
    if (selectArr.length > 0) {
      setSelectValue(selectArr[0])
    } else if (city !== undefined) {
      setSelectValue(city.chinese)
    } else {
      setSelectValue('選擇縣市')
    }
  }
  // Search bar with 'Enter' here
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
      const checkItems = filterStop.reduce((acc, stop) => {
        acc[stop.sarea] = true
        return acc
      }, {})
      const selectArr = [...selectSet]
      const city = taiwanCountiesAndCities.find(
        (city) =>
          city.chinese.includes(searchValue) ||
          city.english.toLowerCase().includes(searchValue)
      )
      setDistrictCheckItems(checkItems)
      if (selectArr.length > 0) {
        setSelectValue(selectArr[0])
      } else if (city !== undefined) {
        setSelectValue(city.chinese)
      } else {
        setSelectValue('選擇縣市')
      }
    }
  }
  // Pagination prev and next control here
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
  // Pagination number control here
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
          ...obj,
          city: '新北市'
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
        const TaipeiArr = [...set]
        // console.log(TaipeiArr)
        const addTaipeiArr = TaipeiArr.map((dist) => {
          return { city: '台北市', sarea: dist }
        })
        // console.log(addTaipeiArr)
        const set2 = new Set()
        res2.map((data) => {
          set2.add(data.sarea)
        })
        const newTaipeiArr = [...set2]
        const addNewTaipeiArr = newTaipeiArr.map((dist) => {
          return { city: '新北市', sarea: dist }
        })
        // console.log(addNewTaipeiArr)
        const set3 = new Set()
        res3.map((data) => {
          set3.add(data.sarea)
        })
        const taoyuanArr = [...set3]
        const addTaoyuanArr = taoyuanArr.map((dist) => {
          return { city: '桃園市', sarea: dist }
        })
        // console.log(addTaoyuanArr)
        setArea([...addTaipeiArr, ...addNewTaipeiArr, ...addTaoyuanArr])
        if (isAllChecked === true) setSarea([...addTaipeiArr])
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
        {isToggle && (
          <OptionModal
            props={area}
            onToggleClose={handleToggleClose}
            onDistrictChange={handleDistrictChange}
          />
        )}
        <StopFilter
          props={sarea}
          onCityChange={handleCityChange}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearchClick={handleSearchClick}
          onSearchKeyDown={handleSearchKeyDown}
          isAllChecked={isAllChecked}
          onAllChange={handleAllChange}
          districtCheckItems={districtCheckItems}
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
