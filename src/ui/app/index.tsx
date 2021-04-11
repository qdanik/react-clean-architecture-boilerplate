import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'ui/routes'
import { GlobalStyles } from './styles'

export const App = (): React.ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </>
  )
}
