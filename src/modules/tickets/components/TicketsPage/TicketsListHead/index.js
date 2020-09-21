import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import PropTypes from 'prop-types'

import MobileTicketsListHead from './TicketsListHead.mobile'
import DesktopTicketsListHead from './TicketsListHead.desktop'

const TicketsListHead = (props) => {
  const { children, toggleSideMenu } = props

  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return isMobileScreen ? (
    <MobileTicketsListHead toggleSideMenu={toggleSideMenu}>
      {children}
    </MobileTicketsListHead>
  ) : (
    <DesktopTicketsListHead>{children}</DesktopTicketsListHead>
  )
}

TicketsListHead.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
}

export default TicketsListHead
