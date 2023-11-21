/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { colorList } from '../../../styled/colorLists'
import { breakpoints } from '../../../styled/breakpoints'
import { SelectionGrid } from '../InputType/StopSelection'
import DistrictCheckbox from '../InputType/DistrictCheckbox'

import CloseIcon from '../../../assets/closeIcon.svg?react'

export default function OptionModal ({
  props,
  onDistrictChange,
  onToggleClose
}) {
  const needProp = props.filter((prop) => prop.city !== '台北市')
  return (
    <ModalContainer>
      <CloseDiv>
        <CloseBtn onClick={onToggleClose}>
          <CloseIcon />
        </CloseBtn>
      </CloseDiv>
      <SelectionGrid>
        {needProp.map((area) => {
          return (
            <DistrictCheckbox
              key={area.sarea}
              prop={`${area.city} ${area.sarea}`}
              propId={area.sarea}
              onCheckChange={(e) =>
                onDistrictChange(area.sarea, e.target.checked)
              }
            />
          )
        })}
      </SelectionGrid>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  border: 0.5px solid ${colorList.gray_table_border};
  border-radius: 8px;
  background-color: ${colorList.white};
  padding: 16px 16px 32px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    border-radius: 28px;
  }
`
const CloseDiv = styled.div`
  text-align: end;
  padding-right: 16px;
`
const CloseBtn = styled.button`
  &:focus {
    outline: none;
  }
`
