import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useHistory } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import qs from 'query-string'

import { List, ListItemText, ListItemIcon } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TicketsSideMenuHead from '../TicketsSideMenuHead'

import {
  StyledSideMenu,
  StyledListItem,
  StyledChip,
  StyledListItemSecondaryAction,
} from './styles'

const TicketsSideMenu = (props) => {
  const {
    unassignedTicketsCount,
    assignedToYouTicketsCount,
    salesTicketsCount,
    facebookTicketsCount,
    facebookAdsTicketsCount,
    instagramAdsTicketsCount,
    toggleMenu,
  } = props

  const menuItems = useMemo(
    () => [
      {
        icon: <FontAwesomeIcon icon={['fal', 'inbox-in']} />,
        text: (
          <FormattedMessage
            id="tickets.assigned.to.you"
            defaultMessage="assigned to you"
          />
        ),
        ticketsCount: assignedToYouTicketsCount,
        type: 'assignedToYou',
      },
      {
        icon: <FontAwesomeIcon icon={['fal', 'inbox']} />,
        text: (
          <FormattedMessage
            id="tickets.unassigned"
            defaultMessage="unassigned"
          />
        ),
        ticketsCount: unassignedTicketsCount,
        type: 'unassigned',
      },
      {
        icon: <FontAwesomeIcon icon={['fal', 'shopping-cart']} />,
        text: <FormattedMessage id="tickets.sales" defaultMessage="sales" />,
        ticketsCount: salesTicketsCount,
        type: 'sales',
      },
      {
        icon: <FontAwesomeIcon icon={['fab', 'facebook-square']} />,
        text: (
          <FormattedMessage id="tickets.facebook" defaultMessage="facebook" />
        ),
        ticketsCount: facebookTicketsCount,
        type: 'facebook',
      },
      {
        icon: <FontAwesomeIcon icon={['fab', 'facebook-square']} />,
        text: (
          <FormattedMessage
            id="tickets.facebook.ads"
            defaultMessage="facebook ads"
          />
        ),
        ticketsCount: facebookAdsTicketsCount,
        type: 'facebookAds',
      },
      {
        icon: <FontAwesomeIcon icon={['fab', 'instagram']} />,
        text: (
          <FormattedMessage
            id="tickets.instagram.ads"
            defaultMessage="instagram ads"
          />
        ),
        ticketsCount: instagramAdsTicketsCount,
        type: 'instagramAds',
      },
    ],
    [
      assignedToYouTicketsCount,
      facebookAdsTicketsCount,
      facebookTicketsCount,
      instagramAdsTicketsCount,
      salesTicketsCount,
      unassignedTicketsCount,
    ]
  )

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { type: ticketsType } = parsedQueryStrings

  return (
    <StyledSideMenu>
      <TicketsSideMenuHead />

      <List disablePadding>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.type}
            button
            onClick={() => {
              history.push({
                search: qs.stringify({
                  type: item.type,
                }),
              })

              toggleMenu()
            }}
            $isActive={item.type === ticketsType}
          >
            <ListItemIcon className="ticketsPage_sideMenu_list-item-icon">
              {item.icon}
            </ListItemIcon>

            <ListItemText className="ticketsPage_sideMenu_list-item-text">
              {item.text}
            </ListItemText>

            <StyledListItemSecondaryAction>
              <StyledChip
                className="ticketsPage_sideMenu_list-item-chip"
                size="small"
                label={item.ticketsCount < 1000 ? item.ticketsCount : '999+'}
                $isActive={item.type === ticketsType}
              />
            </StyledListItemSecondaryAction>
          </StyledListItem>
        ))}

        <StyledListItem button>
          <ListItemIcon className="ticketsPage_sideMenu_list-item-icon">
            <FontAwesomeIcon icon={['fal', 'plus']} />
          </ListItemIcon>

          <ListItemText className="ticketsPage_sideMenu_list-item-text ticketsPage_sideMenu_new-list">
            <FormattedMessage id="tickets.new.list" />
          </ListItemText>
        </StyledListItem>
      </List>
    </StyledSideMenu>
  )
}

TicketsSideMenu.propTypes = {
  unassignedTicketsCount: PropTypes.number.isRequired,
  assignedToYouTicketsCount: PropTypes.number.isRequired,
  salesTicketsCount: PropTypes.number.isRequired,
  facebookTicketsCount: PropTypes.number.isRequired,
  facebookAdsTicketsCount: PropTypes.number.isRequired,
  instagramAdsTicketsCount: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default TicketsSideMenu
