import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import qs from 'query-string'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'

const MoodSelect = () => {
  const { formatMessage } = useIntl()

  const moods = [
    {
      name: formatMessage({
        id: 'tickets.mood.sad',
        defaultMessage: 'sad',
      }),
      icon: <FontAwesomeIcon icon={['fal', 'frown']} />,
    },
    {
      name: formatMessage({
        id: 'tickets.mood.neutral',
        defaultMessage: 'neutral',
      }),
      icon: <FontAwesomeIcon icon={['fal', 'meh']} />,
    },
    {
      name: formatMessage({
        id: 'tickets.mood.happy',
        defaultMessage: 'happy',
      }),
      icon: <FontAwesomeIcon icon={['fal', 'smile']} />,
    },
  ]

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { mood } = parsedQueryStrings

  const changeMood = (newMood) => {
    const newQueryStrings = {
      ...parsedQueryStrings,
      mood: newMood,
    }

    if (!newMood) {
      delete newQueryStrings.mood
    }

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }

  const selectedItemIcon = moods.find((item) => item.name === mood)?.icon

  const placeholderIcon =
    mood && selectedItemIcon ? (
      selectedItemIcon
    ) : (
      <FontAwesomeIcon icon={['fal', 'meh-blank']} />
    )

  return (
    <FilterSelect
      icon={placeholderIcon}
      placeholder={formatMessage({
        id: 'tickets.mood',
        defaultMessage: 'mood',
      })}
      value={mood}
    >
      {(closeDropdown) => (
        <div>
          <MenuItem
            text={formatMessage({
              id: 'tickets.any.mood',
              defaultMessage: 'any mood',
            })}
            icon={<FontAwesomeIcon icon={['fal', 'meh-blank']} />}
            selected={!mood}
            withSelectionIcon
            width={194}
            onClick={() => {
              changeMood(null)
              closeDropdown()
            }}
          />

          {moods.map((item) => {
            const isSelected = mood === item.name

            return (
              <MenuItem
                key={item.name}
                text={item.name}
                icon={item.icon}
                selected={isSelected}
                withSelectionIcon
                width={194}
                onClick={() => {
                  changeMood(item.name)
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

export default MoodSelect
