import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const StyledListItem = styled.div`
  width: 194px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tickets_MoodSelect_item-text {
    display: flex;
    align-items: center;
  }

  .tickets_MoodSelect_select-icon {
    color: ${(props) => props.theme.colors.primary};
    font-size: 18px;
    line-height: 18px;
  }
`

export const StyledListItemIcon = styled.div`
  font-size: 16px;
  line-height: 16px;
  margin-right: 12px;
  color: ${(props) => props.theme.colors.secondary};
`

export const StyledListItemText = styled(Typography)`
  font-size: 14px;
  line-height: 14px;
`
