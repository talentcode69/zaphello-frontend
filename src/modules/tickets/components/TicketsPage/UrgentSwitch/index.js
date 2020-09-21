import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import qs from 'query-string'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FormattedMessage } from 'react-intl'
import { StyledSelectButton } from './style'

const UrgentSwitch = () => {
  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { urgent } = parsedQueryStrings

  const isActive = urgent === '1'

  const toggle = () => {
    const newQueryStrings = {
      ...parsedQueryStrings,
      urgent: isActive ? '0' : '1',
    }

    if (isActive) {
      delete newQueryStrings.urgent
    }

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }

  return (
    <StyledSelectButton variant="text" $isActive={isActive} onClick={toggle}>
      <div className="tickets_UrgentSwitch_icon">
        {isActive ? (
          <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />
        ) : (
          <FontAwesomeIcon icon={['far', 'exclamation-triangle']} />
        )}
      </div>

      <div className="tickets_UrgentSwitch_text">
        <FormattedMessage id="tickets.urgent" defaultMessage="urgent" />
      </div>
    </StyledSelectButton>
  )
}

export default UrgentSwitch
