/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { breakpoints } from '../../styled/breakpoints'
import Frame from '../../assets/Frame.svg?react'

import StopSearch from './InputType/StopSearch'
import StopSelection from './InputType/StopSelection'

export default function StopFilter ({
  props,
  onCityChange,
  searchValue,
  onSearchChange,
  onSearchClick,
  onSearchKeyDown,
  isAllChecked,
  onAllChange,
  isDistrictCheck,
  onDistrictChange,
  isActive,
  selectValue,
  onOptionClick,
  onDropdown,
  cityProps
}) {
  return (
    <StopFilterDiv>
      <div>
        <StopSearch
          onCityChange={onCityChange}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onSearchClick={onSearchClick}
          onSearchKeyDown={onSearchKeyDown}
          isActive={isActive}
          selectValue={selectValue}
          onOptionClick={onOptionClick}
          onDropdown={onDropdown}
          cityProps={cityProps}
        />
        <StopSelection
          props={props}
          isAllChecked={isAllChecked}
          onAllChange={onAllChange}
          isDistrictCheck={isDistrictCheck}
          onDistrictChange={onDistrictChange}
        />
      </div>
      <StopFilterImg>
        <Frame />
      </StopFilterImg>
    </StopFilterDiv>
  )
}

const StopFilterDiv = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 45% 55%;
    grid-gap: 150px;
  }
`
const StopFilterImg = styled.div`
  display: none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 100%;
    display: flex;
    align-items: end;
    svg {
      width: 550px;
      height: auto;
    }
  }
`
