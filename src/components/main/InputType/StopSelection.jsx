/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { breakpoints } from '../../../styled/breakpoints'
import DistrictCheckbox from './DistrictCheckbox'

export default function StopSelection ({ props, isAllChecked, onAllChange }) {
  return (
    <SelectionDiv>
      <DistrictCheckbox
        prop="全部勾選"
        propId="all"
        isAllChecked={isAllChecked}
        onAllChange={onAllChange}
      />
      <SelectionGrid>
        {props.map((area) => {
          return <DistrictCheckbox key={area} prop={area} propId={area} />
        })}
      </SelectionGrid>
    </SelectionDiv>
  )
}

const SelectionDiv = styled.div`
  margin: 24px 0;
  @media screen and (min-width: ${breakpoints.mobile}) {
    margin: 32px 0;
  }
`
const SelectionGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  justify-content: end;
  @media screen and (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

// const SelectionBtn = styled.button`
//   grid-column: 4/5;
//   background-color: transparent;
// `
