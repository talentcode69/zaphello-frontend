import React from 'react'

import CheckboxDropdown from '../CheckboxDropdown'
import ActionsDropdown from '../ActionsDropdown'
import MoodSelect from '../MoodSelect'
import UrgentSwitch from '../UrgentSwitch'
import IntentionSelect from '../IntentionSelect'
import TimeSelect from '../TimeSelect'

import { StyledTicketsFiltersHeader, StyledDivider } from './styles'

const TicketsFiltersHeader = () => {
  return (
    <StyledTicketsFiltersHeader>
      <div className="tickets_filtersHeader_list-actions">
        <CheckboxDropdown borderedCheckbox />

        <StyledDivider orientation="vertical" />

        <div className="tickets_filtersHeader_actions-dropdown">
          <ActionsDropdown />
        </div>

        <StyledDivider orientation="vertical" />
      </div>

      <div className="tickets_filtersHeader_list-filters">
        <div className="tickets_filtersHeader_mood-select">
          <MoodSelect />
        </div>

        <div className="tickets_filtersHeader_urgent-select">
          <UrgentSwitch />
        </div>

        <div className="tickets_filtersHeader_intent-select">
          <IntentionSelect />
        </div>

        <div className="tickets_filtersHeader_time-select">
          <TimeSelect />
        </div>
      </div>
    </StyledTicketsFiltersHeader>
  )
}

export default TicketsFiltersHeader
