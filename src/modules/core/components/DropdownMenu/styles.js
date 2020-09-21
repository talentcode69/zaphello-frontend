import styled from 'styled-components'

import { MenuItem } from '@material-ui/core'

export const StyledMenuItem = styled(MenuItem)`
  width: 100%;
  min-width: 128px;
  height: 40px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 18px;
  font-weight: ${(props) => (props.$isTitle ? '600' : '400')};
  text-transform: ${(props) => (props.$isTitle ? 'uppercase' : 'capitalize')};
  color: ${(props) => props.theme.colors.dark_grey};
  opacity: ${(props) => (props.$isTitle ? '1 !important' : '')};

  &:hover,
  &.MuiListItem-root.Mui-selected,
  &.MuiListItem-root.Mui-selected:hover {
    background-color: ${(props) => props.theme.colors.light_slate_grey};
  }
`
