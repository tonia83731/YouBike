/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { colorList } from '../../styled/colorLists'
import { breakpoints } from '../../styled/breakpoints'

import { replace } from '../../utilities/replace'

const theadData = ['縣市', '區域', '站點名稱', '可借車輛', '可選空位']

export default function StopTable ({ props }) {
  return (
    <BikeTable>
      <BikeThead>
        <BikeTr>
          {theadData.map((head, i) => {
            return <BikeTh key={i}>{head}</BikeTh>
          })}
        </BikeTr>
      </BikeThead>
      <BikeTbody>
        {props.map((prop) => {
          return (
            <BikeTr key={prop.sno}>
              <BikeTd>{prop.city}</BikeTd>
              <BikeTd>{prop.sarea}</BikeTd>
              <BikeTd>{replace(prop.sna)}</BikeTd>
              <BikeTd>{prop.tot}</BikeTd>
              <BikeTd>{prop.sbi}</BikeTd>
            </BikeTr>
          )
        })}
      </BikeTbody>
    </BikeTable>
  )
}

const BikeTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  border-radius: 28px;
  overflow: hidden;
  border: 0.5px solid ${colorList.gray_table_border};
  font-size: 16px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
const BikeThead = styled.thead`
  background-color: ${colorList.light_green};
  color: ${colorList.white};
  font-weight: 500;
  tr {
    height: 66px;
  }
`
const BikeTbody = styled.tbody`
  tr:nth-child(even) {
    background-color: ${colorList.gray};
  }
`
const BikeTr = styled.tr`
  border: none;
  height: 72px;
`

const BikeTh = styled.th`
  border: none;
  @media screen and (max-width: ${breakpoints.mobile}) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }
`
const BikeTd = styled.td`
  border: none;
  color: ${colorList.dark};
  &:nth-last-child(-n + 2) {
    color: ${colorList.light_green};
    font-weight: 700;
  }
  &:not(:nth-child(3)) {
    text-align: center;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }
`
