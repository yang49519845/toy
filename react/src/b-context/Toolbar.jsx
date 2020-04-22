import React from 'react'

import ThemedButton from './ThemeButton'

export default function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>change Theme</ThemedButton>
}