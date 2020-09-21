import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, IconButton, InputBase } from '@material-ui/core'

import MenuItem from 'modules/core/components/MenuItem'

import { StyledHead, StyledMenu } from './styles'

const AssignToMenu = ({ back }) => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <StyledHead>
        <div className="tickets_AssignToMenu_title-wrapper">
          <IconButton
            className="tickets_AssignToMenu_back-button"
            onClick={back}
          >
            <FontAwesomeIcon icon={['fal', 'arrow-left']} />
          </IconButton>

          <div className="tickets_AssignToMenu_title">
            {formatMessage({
              id: 'tickets.assign.to',
              defaultMessage: 'assign to',
            })}
            :
          </div>
        </div>

        <div className="tickets_AssignToMenu_search-input">
          <InputBase
            fullWidth
            placeholder={formatMessage({
              id: 'tickets.search.agents',
              defaultMessage: 'search agents',
            })}
          />
        </div>
      </StyledHead>

      <StyledMenu>
        <MenuItem
          text="Lisa Ciera"
          icon={
            <Avatar
              className="tickets_AssignToMenu_item-avatar"
              variant="circle"
            >
              SH
            </Avatar>
          }
        />

        <MenuItem
          text="Lisa Ciera"
          icon={
            <Avatar
              className="tickets_AssignToMenu_item-avatar"
              variant="circle"
            >
              SH
            </Avatar>
          }
        />

        <MenuItem
          text="Lisa Ciera"
          icon={
            <Avatar
              className="tickets_AssignToMenu_item-avatar"
              variant="circle"
            >
              SH
            </Avatar>
          }
        />

        <MenuItem
          text="Lisa Ciera"
          icon={
            <Avatar
              className="tickets_AssignToMenu_item-avatar"
              variant="circle"
            >
              SH
            </Avatar>
          }
        />

        <MenuItem
          text="Lisa Ciera"
          icon={
            <Avatar
              className="tickets_AssignToMenu_item-avatar"
              variant="circle"
            >
              SH
            </Avatar>
          }
        />
      </StyledMenu>
    </div>
  )
}

AssignToMenu.propTypes = {
  back: PropTypes.func.isRequired,
}

export default AssignToMenu
