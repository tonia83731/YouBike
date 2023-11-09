import styled from "styled-components"
import { breakpoints } from "../../styled/breakpoints"
import Frame from '../../assets/Frame.svg?react'

import StopSearch from "./StopSearch"
import StopSelection from "./StopSelection"

export default function StopFilter({props}) {
  return (
    <StopFilterDiv>
      <div>
        <StopSearch />
        <StopSelection props={props} />
      </div>
      <StopFilterImg>
        <Frame />
      </StopFilterImg>
    </StopFilterDiv>
  );
}

const StopFilterDiv = styled.div`
  @media screen and (min-width: ${breakpoints.desktop}){
    display: grid;
    grid-template-columns: 45% 55%;
    grid-gap: 150px;
  }
`;
const StopFilterImg = styled.div`
  display:none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 100%;
    display: flex;
    align-items: end;
    svg {
      width: 550px;
      height: auto;
    }
  }
`;