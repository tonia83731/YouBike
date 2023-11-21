import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { colorList } from '../styled/colorLists'
import { breakpoints } from '../styled/breakpoints'
import Logo from '../assets/logo.svg?react'
import HamburgerIcon from '../assets/hamburgerIcon.svg?react'
import CloseIcon from '../assets/closeIcon.svg?react'
// import { ReactComponent as Logo } from '../assets/logo.svg'
// import { ReactComponent as HamburgerIcon } from '../assets/hamburgerIcon.svg'
// import { ReactComponent as CloseIcon } from '../assets/closeIcon.svg'

export default function Header () {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <SiteHeader>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <NavInput
        type="checkbox"
        id="nav-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <NavLabel htmlFor="nav-input" id="nav-label">
        {isChecked ? <CloseIcon /> : <HamburgerIcon />}
      </NavLabel>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLink
              to="/YouBike/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              使用說明
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/payment"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              收費方式
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/stop-info"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              站點資訊
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/news"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              最新消息
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/event"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              活動專區
            </NavLink>
          </NavItem>
        </NavList>
        <LoginBtn className="forMobile">
          <Link to="/YouBike/login">登入</Link>
        </LoginBtn>
      </NavBar>
      <LoginBtn className="forDesktop">
        <Link to="/YouBike/login">登入</Link>
      </LoginBtn>
    </SiteHeader>
  )
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
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 104px;
    grid-template-columns: 124px 1fr 4fr 3fr 124px;
  }
  @media screen and (min-width: 1200px) {
    height: 104px;
    grid-template-columns: 124px 1fr 3fr 3fr 124px;
  }
`
const LogoDiv = styled.div`
  grid-column: 2/3;
  svg {
    width: 65px;
    height: auto;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    svg {
      width: 95px;
    }
  }
`
const NavInput = styled.input`
  display: none;
  &:checked ~ nav {
    transform: scale(1, 1);
  }
  &: checked ~ nav li {
    opacity: 1;
    transition: opacity .2s ease-out .15s;
  }
`
const NavLabel = styled.label`
  grid-column: 3/4;
  justify-self: end;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
const NavBar = styled.nav`
  position: absolute;
  top: 100%;
  padding: 32px;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: ${colorList.light_green};
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    background-color: ${colorList.white};
  }
`
const NavList = styled.ul`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
  }
`

const NavItem = styled.li`
  margin-bottom: 32px;
  opacity: 0;
  a {
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 3.24px;
    color: ${colorList.white};
    &.active {
      color: ${colorList.olive};
    }
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    a {
      color: ${colorList.olive};
      &.active {
        color: ${colorList.light_green};
      }
    }
  }
`
const LoginBtn = styled.li`
  position: fixed;
  bottom: 128px;
  background: ${colorList.white};
  padding: 10px 0;
  border-radius: 100px;
  width: 80px;
  text-align: center;
  opacity: 0;
  a {
    color: ${colorList.light_green};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
  &.forDesktop {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    justify-self: end;
    background-color: ${colorList.light_green};
    padding: 10px 24px;
    border-radius: 100px;
    a {
      color: ${colorList.white};
    }

    &.forMobile {
      display: none;
    }
    &.forDesktop {
      display: block;
    }
  }
`
