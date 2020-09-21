import {
  format,
  startOfHour,
  startOfToday,
  startOfDay,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  subDays,
  subMonths,
  isValid,
} from 'date-fns'

const DATE_FORMAT = 'MMM dd, yyyy'

export const TimesEnum = {
  WITHIN_ONE_HOUR: 'within_1_hour',
  TODAY: 'today',
  LAST_THREE_DAYS: 'last_3_days',
  THIS_WEEK: 'this_week',
  THIS_MONTH: 'this_month',
  LAST_MONTH: 'last_month',
  CUSTOM_RANGE: 'custom_range',
}

const {
  WITHIN_ONE_HOUR,
  TODAY,
  LAST_THREE_DAYS,
  THIS_WEEK,
  THIS_MONTH,
  LAST_MONTH,
} = TimesEnum

export const isInvalidRange = ({ startDate, endDate }) => {
  const isInvalidStartDate = startDate && !isValid(new Date(startDate))
  const isInvalidEndDate = endDate && !isValid(new Date(endDate))

  return isInvalidStartDate || isInvalidEndDate
}

export const toDateRange = {
  [WITHIN_ONE_HOUR]: () => {
    const startDate = startOfHour(new Date())

    return {
      startDate: startDate.toISOString(),
      endDate: null,
    }
  },

  [TODAY]: () => {
    const startDate = startOfToday(new Date())

    return {
      startDate: startDate.toISOString(),
      endDate: null,
    }
  },

  [LAST_THREE_DAYS]: () => {
    const threeDaysAgo = subDays(new Date(), 3)
    const startDate = startOfDay(threeDaysAgo)

    return {
      startDate: startDate.toISOString(),
      endDate: null,
    }
  },

  [THIS_WEEK]: () => {
    const startDate = startOfWeek(new Date())

    return {
      startDate: startDate.toISOString(),
      endDate: null,
    }
  },

  [THIS_MONTH]: () => {
    const startDate = startOfMonth(new Date())

    return {
      startDate: startDate.toISOString(),
      endDate: null,
    }
  },

  [LAST_MONTH]: () => {
    const oneMonthAgo = subMonths(new Date(), 1)
    const startDate = startOfMonth(oneMonthAgo)
    const endDate = endOfMonth(oneMonthAgo)

    return {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    }
  },
}

export const getDateRangeLabel = ({
  startDate,
  endDate,
  afterLabel,
  beforeLabel,
}) => {
  if (isInvalidRange({ startDate, endDate })) {
    return null
  }

  const formattedStartDate = startDate
    ? format(new Date(startDate), DATE_FORMAT)
    : null
  const formattedEndDate = endDate
    ? format(new Date(endDate), DATE_FORMAT)
    : null

  if (formattedStartDate && formattedEndDate) {
    return `${formattedStartDate} - ${formattedEndDate}`
  }

  if (formattedStartDate) {
    return `${afterLabel} ${formattedStartDate}`
  }

  return `${beforeLabel} ${formattedEndDate}`
}
