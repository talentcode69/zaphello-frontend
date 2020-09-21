import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { format, isAfter, isFuture, isBefore } from 'date-fns'

import { IconButton, Button } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledDateRangePicker, StyledTextField } from './styles'

const ActivePickerEnum = {
  START_DATE: 'startDate',
  END_DATE: 'endDate',
}

const DateRangePicker = (props) => {
  const { back, onApply, startDate, endDate } = props

  const { formatMessage } = useIntl()

  const [activePicker, setActivePicker] = useState(ActivePickerEnum.START_DATE)
  const [isPickerOpen, setPickerOpen] = useState(false)

  const [pickerStartDate, setPickerStartDate] = useState(startDate)
  const [pickerEndDate, setPickerEndDate] = useState(endDate)

  const getPickerValue = () => {
    if (activePicker === ActivePickerEnum.START_DATE) {
      return pickerStartDate
    }

    if (activePicker === ActivePickerEnum.END_DATE) {
      return pickerEndDate
    }

    return null
  }

  return (
    <StyledDateRangePicker>
      <div className="tickets_TimeRangePicker_head">
        <div className="tickets_TimeRangePicker_title-wrapper">
          <IconButton
            className="tickets_TimeRangePicker_back-button"
            onClick={back}
          >
            <FontAwesomeIcon icon={['fal', 'arrow-left']} />
          </IconButton>

          <div className="tickets_TimeRangePicker_title">
            {formatMessage({
              id: 'tickets.custom.range',
              defaultMessage: 'custom range',
            })}
          </div>
        </div>

        <div className="tickets_TimeRangePicker_date-inputs-wrapper">
          <StyledTextField
            placeholder={formatMessage({
              id: 'tickets.start.date',
              defaultMessage: 'start date',
            })}
            label={formatMessage({
              id: 'tickets.start.date',
              defaultMessage: 'start date',
            })}
            variant="filled"
            color="primary"
            InputProps={{ disableUnderline: true }}
            value={
              pickerStartDate
                ? format(new Date(pickerStartDate), 'dd/MMM/yyyy')
                : ''
            }
            onFocus={() => {
              setActivePicker(ActivePickerEnum.START_DATE)
              setPickerOpen(true)
            }}
          />

          <StyledTextField
            placeholder={formatMessage({
              id: 'tickets.end.date',
              defaultMessage: 'end date',
            })}
            label={formatMessage({
              id: 'tickets.end.date',
              defaultMessage: 'end date',
            })}
            variant="filled"
            color="primary"
            InputProps={{ disableUnderline: true }}
            value={
              pickerEndDate
                ? format(new Date(pickerEndDate), 'dd/MMM/yyyy')
                : ''
            }
            onFocus={() => {
              setActivePicker(ActivePickerEnum.END_DATE)
              setPickerOpen(true)
            }}
          />
        </div>
      </div>

      {isPickerOpen && (
        <div className="tickets_TimeRangePicker_picker">
          <DatePicker
            variant="static"
            disableToolbar
            initialFocusedDate={
              activePicker === ActivePickerEnum.START_DATE && pickerEndDate
                ? pickerEndDate
                : null
            }
            shouldDisableDate={(date) => {
              if (isFuture(date)) {
                return true
              }

              const isStartDateAndAfterEndDate =
                activePicker === ActivePickerEnum.START_DATE &&
                pickerEndDate &&
                isAfter(date, new Date(pickerEndDate))

              const isEndDateAndBeforeStartDate =
                activePicker === ActivePickerEnum.END_DATE &&
                pickerStartDate &&
                isBefore(date, new Date(pickerStartDate))

              if (isStartDateAndAfterEndDate || isEndDateAndBeforeStartDate) {
                return true
              }

              return false
            }}
            value={getPickerValue()}
            onChange={(value) => {
              setPickerOpen(false)
              if (activePicker === ActivePickerEnum.START_DATE) {
                return setPickerStartDate(new Date(value).toISOString())
              }
              return setPickerEndDate(new Date(value).toISOString())
            }}
          />

          <div className="tickets_TimeRangePicker_picker-clear-btn">
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                setPickerOpen(false)
                if (activePicker === ActivePickerEnum.START_DATE) {
                  return setPickerStartDate(null)
                }
                return setPickerEndDate(null)
              }}
            >
              {formatMessage({
                id: 'tickets.none',
                defaultMessage: 'none',
              })}
            </Button>
          </div>
        </div>
      )}

      {!isPickerOpen && (
        <div className="tickets_TimeRangePicker_apply-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onApply(pickerStartDate, pickerEndDate)}
            disabled={!pickerStartDate && !pickerEndDate}
          >
            {formatMessage({
              id: 'tickets.apply',
              defaultMessage: 'apply',
            })}
          </Button>
        </div>
      )}
    </StyledDateRangePicker>
  )
}

DateRangePicker.propTypes = {
  back: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
}

export default DateRangePicker
