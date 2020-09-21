import styled from 'styled-components'

import { Button } from '@material-ui/core'

export const StyledCheckboxDropdown = styled(Button)`
  display: flex;
  align-items: center;
  padding: 8px 7px 8px 7px;
  min-width: unset;
  height: 32px;
  margin-right: 19px;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.colors.slate_grey : 'transparent'};

  .tickets_CheckboxDropdown_selected-count {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-left: 7px;
    color: ${(props) =>
      props.$light ? props.theme.colors.white : props.theme.colors.secondary};
  }
`
