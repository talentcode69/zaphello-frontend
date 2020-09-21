import styled from 'styled-components'

import { Checkbox } from '@material-ui/core'

export const StyledCheckbox = styled(Checkbox)`
  padding: 0;

  .core_Checkbox_checkbox-icon {
    font-size: 30px;
    margin: auto;
    color: ${(props) =>
      props.$lightBorder
        ? props.theme.colors.white
        : props.theme.colors.light_grey};
  }

  .unchecked-border-icon {
    color: ${(props) =>
      props.$lightBorder
        ? props.theme.colors.grey
        : props.theme.colors.secondary};
  }

  .check-icon {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
  }


  /* .Mui-checked {
    .core_Checkbox_checkbox-icon,
    .unchecked-border-icon {
      color: ${(props) => props.theme.colors.primary} !important;
    }
  } */
`
