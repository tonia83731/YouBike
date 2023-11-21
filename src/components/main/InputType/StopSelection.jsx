/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { breakpoints } from '../../../styled/breakpoints'
import DistrictCheckbox from './DistrictCheckbox'

export default function StopSelection ({
  props,
  isAllChecked,
  onAllChange,
  onDistrictChange,
  districtCheckItems
}) {
  return (
    <SelectionDiv>
      <TopFlex>
        <DistrictCheckbox
          prop="全部勾選"
          propId="all"
          isChecked={isAllChecked}
          onCheckChange={onAllChange}
        />
      </TopFlex>
      <SelectionGrid>
        {props.map((area, i) => {
          const lastIndex = props.length - 1
          return (
            <DistrictCheckbox
              key={area.sarea}
              prop={area.sarea}
              propId={area.sarea}
              isChecked={districtCheckItems[area.sarea] || false}
              onCheckChange={(e) =>
                onDistrictChange(area.sarea, e.target.checked)
              }
              specificStyle={{
                gridColumn:
                  area.city === '台北市' && i === lastIndex ? '1/3' : 'auto'
              }}
            />
          )
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
export const SelectionGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  justify-content: end;
  @media screen and (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const TopFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
// const MoreBtn = styled.button`
//   font-size: 16px;
//   text-decoration: underline;
//   align-self: end;
//   color: ${colorList.gray_table_border};
//   &:focus {
//     outline: none;
//   }
// `

// const SelectionBtn = styled.button`
//   grid-column: 4/5;
//   background-color: transparent;
// `
