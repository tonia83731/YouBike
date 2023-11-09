import styled from "styled-components";
import { colorList } from "../../../styled/colorLists";
import { breakpoints } from "../../../styled/breakpoints";

import SearchIcon from '../../../assets/searchIcon.svg?react'

export default function Search() {
  return (
    <SearchDiv>
      <SearchInputText type="text" placeholder="搜尋站點"/>
      <SearchBtn type="button">
        <SearchIcon />
      </SearchBtn>
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const SearchInputText = styled.input`
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: ${colorList.light_green};
  background-color: ${colorList.gray_input};
  padding-left: 16px;
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  width: calc(100% - 16px);
  &::placeholder {
    color: ${colorList.gray_table_border};
    font-weight: 700;
    padding: 0;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;
const SearchBtn = styled.button`
  height: 40px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  background-color: transparent;
  &:focus {
    outline: none;
  }
  svg {
    width: 18px;
    height: auto;
  }
`;