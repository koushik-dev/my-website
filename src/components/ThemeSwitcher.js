import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Theme = styled.div`
  ${({ dark }) =>
    css`
      cursor: pointer;
      height: 15px;
      background-color: var(--switch-color);
      width: 15px;
      border-radius: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: var(--switch-shadow);
      transition: all 0.25s ease;
      &::before {
        content: var(--switch-content);
        width: 100%;
        height: 100%;
        border-radius: 100vh;
        position: absolute;
        background-color: var(--bg-color);
        top: -30%;
        right: -40%;
      }
    `}
`

const ThemeSwitcher = () => {
  const changeTheme = () => {
    document.documentElement.querySelector("body").classList.toggle("dark")
  }
  return <Theme onClick={changeTheme}></Theme>
}

export default ThemeSwitcher
