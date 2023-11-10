/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { colorList } from '../../../styled/colorLists'
import { breakpoints } from '../../../styled/breakpoints'

export default function Pagination ({ nums, onPageClick, onArrowClick, currentPage }) {
  const startPage = Math.max(1, currentPage - 2)
  const endPage = Math.min(nums.length, startPage + 4)
  const showNums = nums.slice(startPage - 1, endPage)
  const length = nums.length
  return (
    <PageDiv>
      <PageItem herf="#" onClick={onArrowClick} id="prev">
        &laquo;
      </PageItem>
      {showNums.map((num) => {
        return (
          <PageItem
            herf="#"
            key={num}
            className={num === currentPage ? 'current' : ''}
            onClick={() => onPageClick?.(num)}
          >
            {num}
          </PageItem>
        )
      })}
      <PageItem herf="#" onClick={onArrowClick} id="next">
        &raquo;
      </PageItem>
      <PageP>共 {length} 頁</PageP>
    </PageDiv>
  )
}

const PageDiv = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: right;
  align-items: center;
`
const PageItem = styled.a`
  font-size: 16px;
  cursor: pointer;
  color: ${colorList.gray_table_border};
  font-weight: 400;
  margin: 0 5px;
  &.current {
    color: ${colorList.light_green};
    font-weight: 700;
  }
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`

const PageP = styled.p`
  font-size: 16px;
  color: ${colorList.gray_table_border};
  font-weight: 400;
  margin-left: 10px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
