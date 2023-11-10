/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { colorList } from '../../../styled/colorLists'
import { breakpoints } from '../../../styled/breakpoints'

export default function CityDropdown ({ onCityChange, isActive, selectValue, onOptionClick, onDropdown, cityProps }) {
  return (
    <CitySelectDiv>
      <CitySelect
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded={isActive ? 'true' : 'false'}
        aria-controls="select-dropdown"
        onClick={onDropdown}
        className={isActive ? 'active' : ''}
      >
        <CitySelectSpan className={selectValue !== '選擇縣市' ? 'selected' : ''}>
          {selectValue}
        </CitySelectSpan>
        <CitySelectArrow></CitySelectArrow>
      </CitySelect>
      <CityList role="listbox">
        {cityProps.map((area, i) => {
          return (
            <CityItem
              key={area.english}
              role="option"
              onClick={onOptionClick}
            >
              <CityInputRadio
                type="radio"
                id={area.english}
                name="city-select"
                value={area.chinese}
                onChange={() => onCityChange?.(area.chinese)}
              />
              <CityLabel
                htmlFor={area.english}
                className={selectValue === area.chinese ? 'selected' : ''}
              >
                {area.chinese}
              </CityLabel>
            </CityItem>
          )
        })}
      </CityList>
    </CitySelectDiv>
  )
}

const CitySelectDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`
const CitySelect = styled.button`
  width: 100%;
  height: 100%;
  color: ${colorList.gray_table_border};
  font-size: 16px;
  background-color: ${colorList.gray_input};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  &.active + ul {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
const CitySelectSpan = styled.span`
  &.selected {
    color: ${colorList.dark};
    font-weight: 500;
  }
`
const CitySelectArrow = styled.span`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${colorList.gray_table_border};
  margin-right: 8px;
`
const CityList = styled.ul`
  position: absolute;
  z-index:1;
  background-color: ${colorList.gray};
  color: ${colorList.dark};
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px 0 16px 16px;
  font-size: 16px;
  overflow-y: auto;
  height: 140px;

  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s ease;
  &:focus-within {
    box-shadow: 0 10px 25px rgba(94, 108, 233, 0.6);
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${colorList.gray};
    border-radius: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colorList.gray_table_border};
    border-radius: 25px;
  }
  width: calc(100% - 16px);
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`

const CityItem = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  width: calc(100% - 16px);
`
const CityInputRadio = styled.input`
  display: none;
  &:disabled + label {
    color: ${colorList.gray_table_border};
  }
`
const CityLabel = styled.label`
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
  &.selected {
    font-weight: 500;
  }
`
