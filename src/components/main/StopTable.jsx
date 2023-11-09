import styled from "styled-components";
import { colorList } from "../../styled/colorLists";
import { breakpoints } from "../../styled/breakpoints";

const theadData = ['縣市', '區域', '站點名稱', '可借車輛', '可選空位']

export default function StopTable() {
  return (
    <BikeTable>
      <BikeThead>
        <BikeTr>
          {theadData.map((head) => {
            return <BikeTh>{head}</BikeTh>;
          })}
        </BikeTr>
      </BikeThead>
      <BikeTbody>
        <BikeTr>
          <BikeTd>台北市</BikeTd>
          <BikeTd>大安區</BikeTd>
          <BikeTd>YouBike2.0_捷運科技大樓站</BikeTd>
          <BikeTd>28</BikeTd>
          <BikeTd>28</BikeTd>
        </BikeTr>
        <BikeTr>
          <BikeTd>台北市</BikeTd>
          <BikeTd>大安區</BikeTd>
          <BikeTd>YouBike2.0_捷運科技大樓站</BikeTd>
          <BikeTd>28</BikeTd>
          <BikeTd>28</BikeTd>
        </BikeTr>
      </BikeTbody>
    </BikeTable>
  );
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
`;
const BikeThead = styled.thead`
  background-color: ${colorList.light_green};
  color: ${colorList.white};
  font-weight: 500;
  tr {
    height: 66px;
  }
`;
const BikeTbody = styled.tbody`
  tr:nth-child(even) {
    background-color: ${colorList.gray};
  }
`;
const BikeTr = styled.tr`
  border: none;
  height: 72px;
`;

const BikeTh = styled.th`
  border: none;
  @media screen and (max-width: ${breakpoints.mobile}) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }
`;
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
`;