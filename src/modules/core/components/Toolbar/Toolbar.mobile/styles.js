import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

export const StyledMobileToolbar = styled.div`
  width: 100vw;
  height: 64px;
  background-color: ${(props) => props.theme.colors.dark_grey};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  z-index: 1200;
`

export const StyledNavItem = styled.div`
  color: ${(props) => props.theme.colors.white};

  a,
  button {
    color: inherit;
  }
`

export const StyledIconButton = styled(IconButton)`
  padding: 10px;
  color: ${(props) =>
    props.$isZapButton
      ? props.theme.colors.light_green
      : props.theme.colors.white} !important;

  filter: drop-shadow(
    ${(props) =>
      props.$isZapButton ? `0px 0px 16px ${props.theme.colors.primary}` : ''}
  );
`
