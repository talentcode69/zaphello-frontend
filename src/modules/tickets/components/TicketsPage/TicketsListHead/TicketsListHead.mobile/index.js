import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useIntl, FormattedMessage } from 'react-intl'
import qs from 'query-string'
import PropTypes from 'prop-types'

import {
  IconButton,
  Typography,
  Button,
  Box,
  InputBase,
  useMediaQuery,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CheckboxDropdown from '../../CheckboxDropdown'
import ActionsDropdown from '../../ActionsDropdown'

import {
  StyledTicketsHeaderMobile,
  StyledSearchBar,
  StyledContent,
  StyledAppBar,
} from './styles'

const titleMap = {
  assignedToYou: (
    <FormattedMessage
      id="tickets.assigned.to.you"
      defaultMessage="assigned to you"
    />
  ),
  unassigned: (
    <FormattedMessage id="tickets.unassigned" defaultMessage="unassigned" />
  ),
  sales: <FormattedMessage id="tickets.sales" defaultMessage="sales" />,
  facebook: (
    <FormattedMessage id="tickets.facebook" defaultMessage="facebook" />
  ),
  facebookAds: (
    <FormattedMessage id="tickets.facebook.ads" defaultMessage="facebook ads" />
  ),
  instagramAds: (
    <FormattedMessage
      id="tickets.instagram.ads"
      defaultMessage="instagram ads"
    />
  ),
}

const MobileTicketsListHead = (props) => {
  const { children, toggleSideMenu } = props

  const { formatMessage } = useIntl()
  const isTabletUpScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { search_active, type } = parsedQueryStrings

  const showSearchBar = () => {
    history.push({
      search: qs.stringify({
        ...parsedQueryStrings,
        search_active: '1',
      }),
    })
  }

  const hideSearchBar = () => {
    const newQueryStrings = { ...parsedQueryStrings }

    delete newQueryStrings.search_active

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }

  if (search_active === '1') {
    return (
      <>
        <StyledAppBar>
          <StyledSearchBar>
            <IconButton
              onClick={hideSearchBar}
              className="tickets_MobileSearchBar_back-button"
            >
              <FontAwesomeIcon icon={['far', 'arrow-left']} />
            </IconButton>

            <InputBase
              placeholder={`${formatMessage({
                id: 'tickets.search.tickets',
                defaultMessage: 'Search tickets',
              })}...`}
              className="tickets_MobileSearchBar_search-input"
              fullWidth
              autoFocus
            />
          </StyledSearchBar>
        </StyledAppBar>

        <StyledContent $isSearchActive>{children}</StyledContent>
      </>
    )
  }

  return (
    <>
      <StyledAppBar>
        <StyledTicketsHeaderMobile>
          <div className="tickets_MobileTicketsHeader_main">
            <div className="tickets_MobileTicketsHeader_title-wrapper">
              <IconButton
                className="tickets_MobileTicketsHeader_menu-button"
                onClick={toggleSideMenu}
              >
                <FontAwesomeIcon icon={['fas', 'bars']} />
              </IconButton>

              <Typography
                variant="h1"
                className="tickets_MobileTicketsHeader_title"
                noWrap
                unselectable
              >
                {isTabletUpScreen &&
                  `${formatMessage({
                    id: 'app.tickets',
                    defaultMessage: 'tickets',
                  })} - `}

                {titleMap[type]}
              </Typography>
            </div>

            <IconButton
              onClick={showSearchBar}
              className="tickets_MobileTicketsHeader_search-button"
            >
              <FontAwesomeIcon icon={['fal', 'search']} />
            </IconButton>
          </div>

          <div className="tickets_MobileTicketsHeader_filters">
            <div className="tickets_MobileTicketsHeader_checkbox-dropdown">
              <CheckboxDropdown
                light
                caretIcon={
                  <FontAwesomeIcon
                    className="tickets_MobileTicketsHeader_checkbox-dropdown-caret"
                    icon={['fas', 'caret-down']}
                  />
                }
              />
            </div>

            <Box display="flex" alignItems="center">
              <div>
                <ActionsDropdown light large />
              </div>

              <div>
                <Button
                  className="tickets_MobileTicketsHeader_filters-button"
                  startIcon={
                    <FontAwesomeIcon
                      className="tickets_MobileTicketsHeader_filters-button-icon"
                      icon={['far', 'sliders-h-square']}
                    />
                  }
                  endIcon={
                    <span className="tickets_MobileTicketsHeader_filters-count">
                      2
                    </span>
                  }
                >
                  Filters
                </Button>
              </div>
            </Box>
          </div>
        </StyledTicketsHeaderMobile>
      </StyledAppBar>

      <StyledContent>{children}</StyledContent>
    </>
  )
}

MobileTicketsListHead.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
}

export default MobileTicketsListHead
