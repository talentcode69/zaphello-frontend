import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { Badge, ListItemIcon, ListItemText, Fade } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/main/logo.svg'
import expandedLogo from 'assets/images/main/expanded-logo.svg'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

import {
  StyledDesktopToolbar,
  StyledLogo,
  StyledListItem,
  StyledAvatar,
  StyledBottomList,
  StyledNavList,
} from './styles'

const navList = [
  {
    icon: <FontAwesomeIcon icon={['fal', 'ticket-alt']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'ticket-alt']} />,
    link: ticketsRoutes.root,
    text: <FormattedMessage id="core.tickets" defaultMessage="tickets" />,
  },
  {
    icon: <FontAwesomeIcon icon={['fal', 'users']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'users']} />,
    link: '/app/users',
    text: <FormattedMessage id="core.users" defaultMessage="users" />,
  },
  {
    icon: <FontAwesomeIcon icon={['fal', 'chart-bar']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'chart-bar']} />,
    link: '/app/analytics',
    text: <FormattedMessage id="core.analytics" defaultMessage="analytics" />,
  },
  {
    icon: <FontAwesomeIcon icon={['fal', 'puzzle-piece']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'puzzle-piece']} />,
    link: '/app/integrations',
    text: (
      <FormattedMessage id="core.integrations" defaultMessage="integrations" />
    ),
  },
  {
    icon: <FontAwesomeIcon icon={['fal', 'book']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'book']} />,
    link: '/app/knowledgebase',
    text: (
      <FormattedMessage
        id="core.knowledgebase"
        defaultMessage="knowledgebase"
      />
    ),
  },
  {
    icon: <FontAwesomeIcon icon={['fal', 'cog']} />,
    activeIcon: <FontAwesomeIcon icon={['fas', 'cog']} />,
    link: '/app/settings',
    text: <FormattedMessage id="core.settings" defaultMessage="settings" />,
  },
]

const DesktopToolbar = () => {
  const [isExpanded, setExpanded] = useState(false)

  const { pathname } = useLocation()

  const checkActiveItem = (link) => {
    const itemModule = link.split('/')[2]
    const currentModule = pathname.split('/')[2]

    return itemModule === currentModule
  }

  return (
    <StyledDesktopToolbar
      isExpanded={isExpanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <StyledLogo to={ticketsRoutes.root}>
        <Fade
          in={!isExpanded}
          exit={false}
          timeout={{ enter: 1000, exit: 0 }}
          unmountOnExit
          appear
        >
          <img src={logo} alt="ZapHello" />
        </Fade>

        <Fade
          in={isExpanded}
          timeout={{ enter: 1000, exit: 0 }}
          exit={false}
          unmountOnExit
        >
          <img src={expandedLogo} alt="ZapHello" />
        </Fade>
      </StyledLogo>

      <StyledNavList disablePadding>
        {navList.map((item) => (
          <StyledListItem
            $isActive={checkActiveItem(item.link)}
            key={item.link}
            button
            component={Link}
            to={item.link}
          >
            <ListItemIcon className="core_toolbar_list-item-icon">
              {checkActiveItem(item.link) ? item.activeIcon : item.icon}
            </ListItemIcon>

            <ListItemText className="core_toolbar_list-item-text">
              {item.text}
            </ListItemText>
          </StyledListItem>
        ))}
      </StyledNavList>

      <StyledBottomList disablePadding>
        <StyledListItem button component={Link} to="/app" $isZapButton>
          <ListItemIcon className="core_toolbar_list-item-icon">
            <FontAwesomeIcon icon={['fas', 'bolt']} />
          </ListItemIcon>

          <ListItemText className="core_toolbar_list-item-text">
            <FormattedMessage id="core.zap.mode" defaultMessage="zap mode" />
          </ListItemText>
        </StyledListItem>

        <StyledListItem button component={Link} to="/app/help">
          <ListItemIcon className="core_toolbar_list-item-icon">
            <FontAwesomeIcon icon={['fal', 'question-circle']} />
          </ListItemIcon>

          <ListItemText className="core_toolbar_list-item-text">
            <FormattedMessage id="core.help" defaultMessage="help" />
          </ListItemText>
        </StyledListItem>

        <StyledListItem button>
          <ListItemIcon className="core_toolbar_list-item-icon">
            <Badge variant="dot" color="error" invisible={false}>
              <FontAwesomeIcon icon={['fal', 'bell']} />
            </Badge>
          </ListItemIcon>

          <ListItemText className="core_toolbar_list-item-text">
            <FormattedMessage
              id="core.notifications"
              defaultMessage="notifications"
            />
          </ListItemText>
        </StyledListItem>

        <StyledListItem button component={Link} to="/app/profile">
          <ListItemIcon className="core_toolbar_list-item-icon">
            <StyledAvatar> </StyledAvatar>
          </ListItemIcon>

          <ListItemText className="core_toolbar_list-item-text">
            John Smith
          </ListItemText>
        </StyledListItem>
      </StyledBottomList>
    </StyledDesktopToolbar>
  )
}

export default DesktopToolbar
