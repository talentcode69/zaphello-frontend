import styled from 'styled-components'

import { MenuItem, Typography } from '@material-ui/core'

export const StyledMenuItem = styled(MenuItem)`
  width: ${(props) => (props.$width ? `${props.$width}px` : '')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 128px;
  height: 40px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.dark_grey};
  opacity: ${(props) => (props.$isTitle ? '1 !important' : '')};
  border-top: ${(props) =>
    props.$withBorderTop ? `1px solid ${props.theme.colors.border}` : ''};

  &:hover,
  &.MuiListItem-root.Mui-selected,
  &.MuiListItem-root.Mui-selected:hover {
    background-color: ${(props) => props.theme.colors.light_slate_grey};
  }

  .core_MenuItem_text {
    display: flex;
    align-items: center;
  }

  .core_MenuItem_select-icon {
    color: ${(props) => props.theme.colors.primary};
    font-size: 18px;
    line-height: 18px;
  }
`

export const StyledItemIcon = styled.div`
  font-size: 16px;
  line-height: 16px;
  margin-right: 12px;
  color: ${(props) => props.theme.colors.secondary};
`

export const StyledItemText = styled(Typography)`
  font-size: ${(props) => (props.$isTitle ? '12px' : '14px')};
  font-weight: ${(props) => (props.$isTitle ? '600' : '400')};
  text-transform: ${(props) => (props.$isTitle ? 'uppercase' : 'capitalize')};
  line-height: 14px;
`
