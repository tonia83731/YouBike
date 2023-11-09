import styled from "styled-components";
import { colorList } from "../../../styled/colorLists";


export default function Pagination() {
  return (
    <PageDiv>
      <PageItem herf="#">&laquo;</PageItem>
      <PageItem herf="#">1</PageItem>
      <PageItem herf="#">&raquo;</PageItem>
    </PageDiv>
  );
}


const PageDiv = styled.div`
  
`
const PageItem = styled.a`

`