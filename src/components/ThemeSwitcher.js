import React, { useEffect } from "react"
import styled from "@emotion/styled"

const Theme = styled.div`
  justify-self: end;
  cursor: pointer;
  height: 13px;
  background-color: var(--switch-color);
  width: 13px;
  border-radius: 100vh;
  position: relative;
  box-shadow: var(--switch-shadow);
  transition: all 0.25s ease;
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
