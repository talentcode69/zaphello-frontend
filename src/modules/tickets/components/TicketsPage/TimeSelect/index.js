import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import qs from 'query-string'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'
import DateRangePicker from './DateRangePicker'

import { TimesEnum, getDateRangeLabel, isInvalidRange } from './helpers'

const {
  WITHIN_ONE_HOUR,
  TODAY,
  LAST_THREE_DAYS,
  THIS_WEEK,
  THIS_MONTH,
  LAST_MONTH,
  CUSTOM_RANGE,
} = TimesEnum

const TimeSelect = () => {
  const { formatMessage } = useIntl()

  const times = [
    {
      name: formatMessage({
        id: 'tickets.within.one.hour',
        defaultMessage: 'Within 1 hour',
      }),
      id: WITHIN_ONE_HOUR,
    },
    {
      name: formatMessage({ id: 'tickets.today', defaultMessage: 'Today' }),
      id: TODAY,
    },
    {
      name: formatMessage({
        id: 'tickets.last.three.days',
        defaultMessage: 'Last 3 days',
      }),
      id: LAST_THREE_DAYS,
    },
    {
      name: formatMessage({
        id: 'tickets.this.week',
        defaultMessage: 'This week',
      }),
      id: THIS_WEEK,
    },
    {
      name: formatMessage({
        id: 'tickets.this.month',
        defaultMessage: 'This month',
      }),
      id: THIS_MONTH,
    },
    {
      name: formatMessage({
        id: 'tickets.last.month',
        defaultMessage: 'Last month',
      }),
      id: LAST_MONTH,
    },
  ]

  const [isDatePickerVisible, showDatePicker] = useState(false)

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = useMemo(() => qs.parse(search), [search])

  const { time, dt_from, dt_till } = parsedQueryStrings

  const setTime = useCallback(
    (newTime, startDate, endDate) => {
      const newQueryStrings = {
        ...parsedQueryStrings,
        time: newTime,
      }

      delete newQueryStrings.dt_from
      delete newQueryStrings.dt_till

      if (newTime === CUSTOM_RANGE) {
        if (startDate) newQueryStrings.dt_from = startDate
        if (endDate) newQueryStrings.dt_till = endDate
      }

      history.push({
        search: qs.stringify(newQueryStrings),
      })
    },
    [history, parsedQueryStrings]
  )

  const clearTime = useCallback(() => {
    const newQueryStrings = {
      ...parsedQueryStrings,
    }

    delete newQueryStrings.dt_from
    delete newQueryStrings.dt_till
    delete newQueryStrings.time

    history.push({
      search: qs.stringify(newQueryStrings),
    })
  }, [history, parsedQueryStrings])

  // clear values if url dates are invalid
  useEffect(() => {
    const missingRange = time === CUSTOM_RANGE && !dt_from && !dt_till
    const invalidTimeValue = time && !Object.values(TimesEnum).includes(time)
    const invalidRange =
      (dt_from || dt_till) &&
      isInvalidRange({ startDate: dt_from, endDate: dt_till })

    if (missingRange || invalidRange || invalidTimeValue) {
      clearTime()
    }
  }, [clearTime, dt_from, dt_till, time])

  const getSelectedLabel = () => {
    if (time === CUSTOM_RANGE) {
      return getDateRangeLabel({
        startDate: dt_from,
        endDate: dt_till,
        afterLabel: formatMessage({
          id: 'tickets.after',
          defaultMessage: 'after',
        }),
        beforeLabel: formatMessage({
          id: 'tickets.before',
          defaultMessage: 'before',
        }),
      })
    }

    return times.find((item) => item.id === time)?.name
  }

  return (
    <FilterSelect
      icon={<FontAwesomeIcon icon={['far', 'calendar-day']} />}
      placeholder={formatMessage({
        id: 'tickets.any.time',
        defaultMessage: 'any time',
      })}
      value={getSelectedLabel()}
      onClose={() => showDatePicker(false)}
    >
      {(closeDropdown) => {
        if (isDatePickerVisible) {
          return (
            <DateRangePicker
              startDate={time === CUSTOM_RANGE ? dt_from : null}
              endDate={time === CUSTOM_RANGE ? dt_till : null}
              back={() => showDatePicker(false)}
              onApply={(pickerStartDate, pickerEndDate) => {
                setTime(CUSTOM_RANGE, pickerStartDate, pickerEndDate)
                closeDropdown()
              }}
            />
          )
        }

        return (
          <div>
            {/* Clear filter */}
            <MenuItem
              text={formatMessage({
                id: 'tickets.any.time',
                defaultMessage: 'any time',
              })}
              selected={!time}
              width={194}
              withSelectionIcon
              onClick={() => {
                clearTime()
                closeDropdown()
              }}
            />

            {/* Options */}
            {times.map((item) => {
              const isSelected = item.name === time

              return (
                <MenuItem
                  key={item.id}
                  text={item.name}
                  selected={isSelected}
                  width={194}
                  withSelectionIcon
                  onClick={() => {
                    setTime(item.id)
                    closeDropdown()
                  }}
                />
              )
            })}

            {/* Custom Range */}
            <MenuItem
              text={`${formatMessage({
                id: 'tickets.custom.range',
                defaultMessage: 'custom range',
              })}...`}
              width={194}
              withBorderTop
              withSelectionIcon
              selected={time === CUSTOM_RANGE}
              onClick={() => {
                showDatePicker(true)
              }}
            />
          </div>
        )
      }}
    </FilterSelect>
  )
}

export default TimeSelect
