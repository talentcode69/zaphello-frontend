import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import MenuItem from 'modules/core/components/MenuItem'
import AssignToMenu from './AssignToMenu'
import FilterSelect from '../FilterSelect'

const ActionsDropdown = (props) => {
  const { light, large } = props
  const [isAssigntoSelected, setAssigntoSelected] = useState(false)

  const { formatMessage } = useIntl()

  return (
    <FilterSelect
      light={light}
      large={large}
      onClose={() => setAssigntoSelected(false)}
      placeholder={formatMessage({
        id: 'core.actions',
        defaultMessage: 'actions',
      })}
    >
      {(closeDropdown) =>
        isAssigntoSelected ? (
          <AssignToMenu back={() => setAssigntoSelected(false)} />
        ) : (
          <div>
            <MenuItem
              text={`${formatMessage({
                id: 'tickets.assign.to',
                defaultMessage: 'assign to',
              })}...`}
              onClick={() => setAssigntoSelected(true)}
            />

            <MenuItem
              text={formatMessage({
                id: 'tickets.mark.as.urgent',
                defaultMessage: 'Mark as urgent',
              })}
              onClick={closeDropdown}
            />

            <MenuItem
              text={formatMessage({
                id: 'tickets.mark.as.spam',
                defaultMessage: 'Mark as Spam',
              })}
              onClick={closeDropdown}
            />

            <MenuItem
              text={formatMessage({
                id: 'tickets.close.tickets',
                defaultMessage: 'Close Tickets',
              })}
              onClick={closeDropdown}
            />
          </div>
        )
      }
    </FilterSelect>
  )
}

ActionsDropdown.propTypes = {
  light: PropTypes.bool,
  large: PropTypes.bool,
}

ActionsDropdown.defaultProps = {
  light: false,
  large: false,
}

export default ActionsDropdown
