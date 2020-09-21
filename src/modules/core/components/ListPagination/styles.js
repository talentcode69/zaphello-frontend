import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

export const StyledListPagination = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.dark_grey};

  .core_listPagination_text {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-right: 6px;
    letter-spacing: 1px;
  }
`

export const StyledIconButton = styled(IconButton)`
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 14px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`
