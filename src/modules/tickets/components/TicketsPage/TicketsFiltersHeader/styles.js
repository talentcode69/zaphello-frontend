import styled from 'styled-components'

import { Divider } from '@material-ui/core'

export const StyledTicketsFiltersHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.secondary};
  padding: 8px 28px 8px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tickets_filtersHeader_list-actions {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .tickets_filtersHeader_list-filters {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .tickets_filtersHeader_actions-dropdown {
    margin-left: 13px;
    margin-right: 14px;
  }

  .tickets_filtersHeader_mood-select {
    margin-right: 8px;
  }

  .tickets_filtersHeader_urgent-select {
    margin-right: 10px;
  }

  .tickets_filtersHeader_intent-select {
    margin-right: 18px;
  }
`

export const StyledDivider = styled(Divider)`
  width: 2px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.divider};
`
