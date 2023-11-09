import styled from "styled-components"
import { breakpoints } from "../../styled/breakpoints"

import Search from "./InputType/Search"
import CityDropdown from "./InputType/CityDropdown"

export default function StopSearch() {
  return (
    <StopSearchDiv>
      <CityDropdown />
      <Search />
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
`;