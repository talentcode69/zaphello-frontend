import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import PropTypes from 'prop-types'

import MobileTicketsListItem from './TicketsListItem.mobile'
import DesktopTicketsListItem from './TicketsListItem.desktop'

const TicketsListItem = (props) => {
  const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return isTabletScreen ? (
    <MobileTicketsListItem {...props} />
  ) : (
    <DesktopTicketsListItem {...props} />
  )
}

TicketsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  intent: PropTypes.string,
  urgent: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
}

TicketsListItem.defaultProps = {
  intent: '',
}

export default React.memo(TicketsListItem)
