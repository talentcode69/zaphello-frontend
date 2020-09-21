import React from 'react'
import { IntlProvider as CoreTranslationsProvider } from 'react-intl'
import { BrowserRouter as Router } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns'

import {
  CssBaseline,
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

// translations
import EN_TRANSLATIONS from './locale/en.json'

// Material UI custom theme
import { muiTheme } from './utils/mui-theme'

// root
import AppRoutes from './routes'

// utils
import { colors } from './utils/colors'

// icons
import './utils/icons'

function App() {
  return (
    <CoreTranslationsProvider locale="en" messages={EN_TRANSLATIONS}>
      <ThemeProvider theme={{ colors }}>
        <MuiThemeProvider theme={muiTheme}>
          <MuiStylesProvider injectFirst>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Router>
                <AppRoutes />
              </Router>

              <CssBaseline />
            </MuiPickersUtilsProvider>
          </MuiStylesProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </CoreTranslationsProvider>
  )
}

export default App
