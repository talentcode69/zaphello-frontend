import React, { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'

import { Typography } from '@material-ui/core'

import Checkbox from 'modules/core/components/Checkbox'
import { ListSelectionContext } from 'modules/tickets/hooks/useListSelection'

import { FormattedMessage } from 'react-intl'
import { StyledDesktopTicketsListItem, StyledTag } from './styles'

const DesktopTicketsListItem = (props) => {
  const {
    id,
    name,
    description,
    customer_name,
    intent,
    urgent,
    createdAt,
  } = props

  const { selectedItems, selectItem, deselectItem } = useContext(
    ListSelectionContext
  )

  const formattedDate = useMemo(() => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), 'MMM dd, yyyy')
    }

    return null
  }, [createdAt])

  const selectHandler = (event) => {
    if (event.target.checked) {
      selectItem(id)
    } else {
      deselectItem(id)
    }
  }

  const isSelected = selectedItems.includes(id)

  return (
    <StyledDesktopTicketsListItem button $isSelected={isSelected}>
      <div className="tickets_DesktopTicketsListItem_checkbox">
        <Checkbox
          onClick={(event) => event.stopPropagation()}
          onChange={selectHandler}
          checked={isSelected}
          bordered
          lightBorder
        />
      </div>

      <div className="tickets_DesktopTicketsListItem_info-wrapper">
        <div className="tickets_DesktopTicketsListItem_name-description">
          <Typography className="tickets_DesktopTicketsListItem_name" noWrap>
            {name}
          </Typography>

          <Typography
            className="tickets_DesktopTicketsListItem_description"
            noWrap
          >
            {description}
          </Typography>
        </div>

        <div className="tickets_DesktopTicketsListItem_right">
          <div>
            <Typography
              className="tickets_DesktopTicketsListItem_customer-name"
              noWrap
            >
              {customer_name || <span>&#45;</span>}
            </Typography>
          </div>

          <div className="tickets_DesktopTicketsListItem_tag">
            {urgent || intent ? (
              <StyledTag $light $isUrgent={urgent}>
                <Typography>
                  {urgent ? (
                    <FormattedMessage
                      id="tickets.urgent"
                      defaultMessage="urgent"
                    />
                  ) : (
                    intent
                  )}
                </Typography>
              </StyledTag>
            ) : (
              <span>&#45;</span>
            )}
          </div>

          <div>
            <Typography className="tickets_DesktopTicketsListItem_date" noWrap>
              {formattedDate || <span>&#45;</span>}
            </Typography>
          </div>
        </div>
      </div>
    </StyledDesktopTicketsListItem>
  )
}

DesktopTicketsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  intent: PropTypes.string,
  urgent: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
}

DesktopTicketsListItem.defaultProps = {
  intent: '',
}

export default React.memo(DesktopTicketsListItem)
