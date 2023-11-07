import { NavLink, Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colorList } from '../styled/colorLists'
import { breakpoints } from '../styled/breakpoints'
import Logo from '../assets/logo.svg?react'
import HamburgerIcon from '../assets/hamburgerIcon.svg?react'
// import CloseIcon from '../assets/closeIcon.svg'

export default function Header () {
  return (
    <SiteHeader>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <NavInput type="checkbox" id="nav-input" />
      <NavLabel htmlFor="nav-input">
        <HamburgerIcon />
      </NavLabel>
      {/* <NavBar>
        <NavDiv>
          <ul>
            <NavItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                使用說明
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/payment"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                收費方式
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/stop-info"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                站點資訊
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                最新消息
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/event"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                活動專區
              </NavLink>
            </NavItem>
          </ul>
          <LoginBtn>
            <Link to="/login">登入</Link>
          </LoginBtn>
        </NavDiv>
      </NavBar> */}
    </SiteHeader>
  );
}

const SiteHeader = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 72px;
  background: ${colorList.white};
  border-bottom: 1px solid ${colorList.gray_border};
  display: grid;
  grid-template-columns: 32px 1fr 1fr 32px;
  align-items: center;
  @media screen and (min-width: ${breakpoints.mobile}) {
    height: 104px;
  }
`;
const LogoDiv = styled.div`
  grid-column: 2/3; 
  svg {
    width: 65px;
    height: auto;
  }
  @media screen and (min-width: ${breakpoints.mobile}) {
    svg {
      width: 95px;
    }
  }
`;
const NavInput = styled.input`
  display: none;
`
const NavLabel = styled.label`
  grid-column: 3/4;
  justify-self: end;
`;
const NavBar = styled.nav`
  position: absolute;
  top: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: ${colorList.light_green};
`
const NavDiv = styled.div`
  padding: 32px;
  height: 100%;
`
const NavItem = styled.li`
  margin-bottom: 32px;
  a {
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    letter-spacing: 3.24px;
    color: ${colorList.white};
    &.active{
      color: ${colorList.olive}
    }
  }
`
const LoginBtn = styled.div`
  background: ${colorList.white};
  padding: 10px 0;
  border-radius: 100px;
  width: 80px;
  text-align: center;
  a {
    color: ${colorList.light_green};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
`;
