import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ToolbarLayout from '../components/ToolbarLayout'

// routes
import AppRoutes from './AppRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/app">
        <ToolbarLayout>
          <AppRoutes />
        </ToolbarLayout>
      </Route>
    </Switch>
  )
}

export default RootRoutes
