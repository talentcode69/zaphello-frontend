import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from '@material-ui/core'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

import { StyledMobileToolbar, StyledNavItem, StyledIconButton } from './styles'

const MobileToolbar = () => {
  return (
    <StyledMobileToolbar>
      <StyledNavItem>
        <StyledIconButton component={Link} to={ticketsRoutes.root}>
          <FontAwesomeIcon icon={['fal', 'ticket-alt']} />
        </StyledIconButton>
      </StyledNavItem>

      <StyledNavItem>
        <StyledIconButton component={Link} to={ticketsRoutes.root}>
          <FontAwesomeIcon icon={['fal', 'users']} />
        </StyledIconButton>
      </StyledNavItem>

      <StyledNavItem>
        <StyledIconButton component={Link} to={ticketsRoutes.root} $isZapButton>
          <FontAwesomeIcon icon={['fas', 'bolt']} />
        </StyledIconButton>
      </StyledNavItem>

      <StyledNavItem>
        <StyledIconButton>
          <Badge variant="dot" color="error" invisible={false}>
            <FontAwesomeIcon icon={['fal', 'bell']} />
          </Badge>
        </StyledIconButton>
      </StyledNavItem>

      <StyledNavItem>
        <StyledIconButton>
          <FontAwesomeIcon icon={['fal', 'ellipsis-h']} />
        </StyledIconButton>
      </StyledNavItem>
    </StyledMobileToolbar>
  )
}

export default MobileToolbar
