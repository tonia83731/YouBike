/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { colorList } from '../../../styled/colorLists'
import { breakpoints } from '../../../styled/breakpoints'

export default function DistrictCheckbox ({ prop, propId, isChecked, onCheckChange }) {
  return (
    <>
      <CheckboxLabel htmlFor={propId}>
        {prop}
        <CheckboxInput type="checkbox" id={propId} name="option-input" value={propId} checked={isChecked} onChange={onCheckChange}/>
        <CheckboxSpan></CheckboxSpan>
      </CheckboxLabel>
    </>
  )
}

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked + span {
    background-color: ${colorList.light_green};
    border: 2px solid ${colorList.light_green};
  }
  &:checked + span::after {
    display: block;
    border: solid ${colorList.white};
    border-width: 0 3px 3px 0;
  }
}
`
const CheckboxLabel = styled.label`
  margin-left: 12px;
  display: block;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${colorList.dark};
  font-size: 16px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
    &:last-child{
      grid-column: 1/3;
    }
  }
`
const CheckboxSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  height: 18px;
  width: 18px;
  background-color: ${colorList.white};
  border: 2px solid ${colorList.gray_table_border};
  border-radius: 2px;
  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 1.5px;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 10px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
