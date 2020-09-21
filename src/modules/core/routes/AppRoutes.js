import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes
import TicketsRoutes from 'modules/tickets/routes'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={ticketsRoutes.root}>
        <TicketsRoutes />
      </Route>
    </Switch>
  )
}

export default AppRoutes
