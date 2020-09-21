import styled from 'styled-components'
import { Avatar, List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const StyledDesktopToolbar = styled.div`
  width: ${(props) => (props.isExpanded ? '224px' : '64px')};
  height: 100vh;
  background-color: ${(props) => props.theme.colors.dark_grey};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 0 18px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1200;
  transition: width 0.25s ease-out;
`

export const StyledLogo = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 28px;
`

export const StyledNavList = styled(List)`
  width: 100%;
  margin-bottom: auto;
`

export const StyledListItem = styled(ListItem)`
  height: 48px;
  padding: 0;

  & .core_toolbar_list-item-icon {
    width: 64px;
    height: 48px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => {
      if (props.$isZapButton) return props.theme.colors.light_green
      if (props.$isActive) return props.theme.colors.white
      return props.theme.colors.grey
    }};
    background: ${(props) =>
      props.$isZapButton
        ? `radial-gradient(34.86% 44.86% at 50% 50%,rgba(59,255,187,0.1) 0%,rgba(55,201,120,0) 100%)`
        : 'transparent'};

    svg {
      filter: drop-shadow(
        ${(props) =>
          props.$isZapButton
            ? `0px 0px 16px ${props.theme.colors.primary}`
            : ''}
      );
    }
  }

  & .core_toolbar_list-item-text {
    & > * {
      font-weight: ${(props) => (props.$isActive ? 700 : 400)};
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: ${(props) =>
        props.$isZapButton
          ? props.theme.colors.light_green
          : props.theme.colors.white};
      white-space: nowrap;
    }
  }

  &:hover {
    .core_toolbar_list-item-icon {
      color: ${(props) =>
        props.$isZapButton
          ? props.theme.colors.light_green
          : props.theme.colors.white};
    }

    .core_toolbar_list-item-text {
      & > * {
        color: ${(props) =>
          props.$isZapButton
            ? props.theme.colors.light_green
            : props.theme.colors.white};
      }
    }
  }
`

export const StyledBottomList = styled(List)`
  margin-top: 30px;
  width: 100%;
`

export const StyledAvatar = styled(Avatar)`
  width: 24px;
  height: 24px;
  padding: 12px;
  cursor: pointer;
`
