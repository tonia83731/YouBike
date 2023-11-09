import styled from "styled-components"
import { colorList } from "../../styled/colorLists"
import { breakpoints } from "../../styled/breakpoints"
import DistrictCheckbox from "./InputType/DistrictCheckbox"

export default function StopSelection({props}) {
  return (
    <SelectionDiv>
      <DistrictCheckbox prop="全部勾選" propId="all" isChecked="true"/>
      <SelectionGrid>
        {props.map((area) => {
          return <DistrictCheckbox prop={area} propId={area} />;
        })}
      </SelectionGrid>
    </SelectionDiv>
  );
}

const SelectionDiv = styled.div`
  margin: 24px 0;
  @media screen and (min-width: ${breakpoints.mobile}) {
    margin: 32px 0;
  }
`;
const SelectionGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  justify-content: end;
  @media screen and (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;





