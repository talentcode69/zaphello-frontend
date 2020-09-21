import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import qs from 'query-string'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'

const intents = [
  {
    name: 'intent 1',
  },
  {
    name: 'intent 2',
  },
]

const IntentionSelect = () => {
  const { formatMessage } = useIntl()

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { intent } = parsedQueryStrings

  const changeIntent = (newIntent) => {
    const newQueryStrings = {
      ...parsedQueryStrings,
      intent: newIntent,
    }

    if (!newIntent) {
      delete newQueryStrings.intent
    }

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }

  return (
    <FilterSelect
      icon={<FontAwesomeIcon icon={['far', 'bullseye-arrow']} />}
      placeholder={formatMessage({
        id: 'tickets.any.intent',
        defaultMessage: 'any intent',
      })}
      value={intent}
    >
      {(closeDropdown) => (
        <div>
          <MenuItem
            text={formatMessage({
              id: 'tickets.any.intent',
              defaultMessage: 'any intent',
            })}
            selected={!intent}
            withSelectionIcon
            width={194}
            onClick={() => {
              changeIntent(null)
              closeDropdown()
            }}
          />

          {intents.map((item) => {
            const isSelected = intent === item.name

            return (
              <MenuItem
                key={item.name}
                text={item.name}
                selected={isSelected}
                width={194}
                withSelectionIcon
                onClick={() => {
                  changeIntent(item.name)
                  closeDropdown()
                }}
              />
            )
          })}
        </div>
      )}
    </FilterSelect>
  )
}

export default IntentionSelect
