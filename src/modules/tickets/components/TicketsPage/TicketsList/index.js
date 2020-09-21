import React from 'react'
import PropTypes from 'prop-types'

import TicketsListItem from '../TicketsListItem'

import { StyledTicketsList } from './styles'

const TicketsList = (props) => {
  const { tickets } = props

  return (
    <StyledTicketsList>
      {tickets.map((ticket) => (
        <TicketsListItem key={ticket.id} {...ticket} />
      ))}
    </StyledTicketsList>
  )
}

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TicketsList
