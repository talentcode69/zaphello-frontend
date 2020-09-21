import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledSelectButton = styled(Button)`
  height: 32px;
  border-radius: 3px;
  color: ${(props) =>
    props.$light ? props.theme.colors.white : props.theme.colors.secondary};
  background-color: ${(props) =>
    (props.$isOpen || props.$hasValue) && !props.$light
      ? props.theme.colors.slate_grey
      : 'transparent'};

  .tickets_FilterSelect_icon {
    font-size: 14px;
    line-height: 14px;
    margin-right: 8px;
  }

  .tickets_FilterSelect_text {
    font-weight: 500;
    font-size: ${(props) => (props.$large ? '16px' : '13px')};
    text-transform: capitalize;
    margin-right: 7px;
  }

  .tickets_FilterSelect_arrow {
    font-size: ${(props) => (props.$large ? '16px' : '12px')};
    color: ${(props) =>
      props.$light ? props.theme.colors.white_blue : 'inherit'};
  }
`
