import React from 'react'
import { FormattedMessage } from 'react-intl'
import { IconButton } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledTicketsMenuHead } from './styles'

const TicketsSideMenuHead = () => {
  return (
    <StyledTicketsMenuHead>
      <h1>
        <FormattedMessage id="tickets" defaultMessage="tickets" />
      </h1>

      <IconButton className="ticketsPage_ticketsMenuHead_add-button">
        <FontAwesomeIcon icon={['far', 'plus']} />
      </IconButton>
    </StyledTicketsMenuHead>
  )
}

export default TicketsSideMenuHead
