import React from 'react'
import PropTypes from 'prop-types'

import TicketsSearchHeader from '../../TicketsSearchHeader'
import TicketsFiltersHeader from '../../TicketsFiltersHeader'

import { StyledAppBar, StyledContent } from './styles'

const DesktopTicketsListHead = ({ children }) => {
  return (
    <>
      <StyledAppBar>
        <TicketsSearchHeader />

        <TicketsFiltersHeader />
      </StyledAppBar>

      <StyledContent>{children}</StyledContent>
    </>
  )
}

DesktopTicketsListHead.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DesktopTicketsListHead
