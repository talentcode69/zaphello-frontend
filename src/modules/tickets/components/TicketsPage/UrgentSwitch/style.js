import styled from 'styled-components'

import { Button } from '@material-ui/core'

export const StyledSelectButton = styled(Button)`
  height: 32px;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.slate_grey : 'transparent'};

  &:focus {
    background-color: ${(props) =>
      props.$isActive ? props.theme.colors.slate_grey : 'transparent'};
  }

  .tickets_UrgentSwitch_icon {
    font-size: 14px;
    line-height: 14px;
    margin-right: 8px;
  }

  .tickets_UrgentSwitch_text {
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
    margin-right: 7px;
  }
`
