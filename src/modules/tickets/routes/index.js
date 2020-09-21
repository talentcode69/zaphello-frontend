import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import TicketsPage from '../pages/TicketsPage'

import { ticketsRoutes } from './constants'

import EN_TRANSLATIONS from '../locale/en.json'

const TicketsRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={ticketsRoutes.root} exact>
          <TicketsPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default TicketsRoutes
