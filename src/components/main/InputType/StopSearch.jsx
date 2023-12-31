/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { breakpoints } from '../../../styled/breakpoints'

import Search from './Search'
import CityDropdown from './CityDropdown'

export default function StopSearch ({
  onCityChange,
  searchValue,
  onSearchChange,
  onSearchClick,
  onSearchKeyDown,
  isActive,
  selectValue,
  onOptionClick,
  onDropdown,
  cityProps
}) {
  return (
    <StopSearchDiv>
      <CityDropdown
        onCityChange={onCityChange}
        isActive={isActive}
        selectValue={selectValue}p
        onOptionClick={onOptionClick}
        onDropdown={onDropdown}
        cityProps={cityProps}
      />
      <Search
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onSearchClick={onSearchClick}
        onSearchKeyDown={onSearchKeyDown}
      />
    </StopSearchDiv>
  )
}

const StopSearchDiv = styled.div`
  width: calc(100% - 16px);
  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-gap: 8px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    grid-template-columns: 40% 60%;
    grid-template-rows: unset;
    grid-gap: 16px;
  }
`
