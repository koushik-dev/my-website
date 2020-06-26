import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Theme = styled.div`
  ${({ dark }) =>
    css`
      justify-self: end;
      cursor: pointer;
      height: 13px;
      background-color: var(--switch-color);
      width: 13px;
      border-radius: 100vh;
      position: relative;
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

// toggle body class for theme
const changeTheme = () => {
  document.documentElement.querySelector("body").classList.toggle("dark")
}

// key press
const onEnter = e => {
  if (e.key === "Enter") changeTheme()
}

const setSystemTheme = () => {
  if (window.matchMedia)
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) changeTheme()
}

const themeListener = () => {
  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => {
        if (e.matches !== document.documentElement.querySelector("body").classList.contains('dark')) changeTheme()
      })
  }
}
const ThemeSwitcher = () => {
  useEffect(() => {
    setSystemTheme()
    themeListener()
  }, [])
  return <Theme onKeyPress={onEnter} onClick={changeTheme} tabIndex="0" className="level-right"></Theme>
}

export default ThemeSwitcher
