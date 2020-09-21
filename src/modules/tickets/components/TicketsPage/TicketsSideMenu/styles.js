import styled from 'styled-components'

import { ListItem, Chip, ListItemSecondaryAction } from '@material-ui/core'

import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledSideMenu = styled.div`
  width: 320px;
  background-color: ${(props) => props.theme.colors.light_grey};
  height: 100vh;
  overflow-y: auto;

  @media ${mediaQueries.small} {
    width: 268px;
  }

  @media ${mediaQueries.xLarge} {
    position: sticky;
    top: 0;
  }
`

export const StyledListItem = styled(ListItem)`
  padding: 0 17px 0 24px;
  height: 64px;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.secondary : 'transparent'};

  @media ${mediaQueries.small} {
    height: 56px;
  }

  & .ticketsPage_sideMenu_list-item-icon {
    min-width: 16px;
    justify-content: flex-end;
    margin-right: 10px;
    font-size: 16px;
    line-height: 16px;
    color: ${(props) =>
      props.$isActive
        ? props.theme.colors.light_green
        : props.theme.colors.grey};
  }

  & .ticketsPage_sideMenu_list-item-text {
    & > * {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: ${(props) =>
        props.$isActive
          ? props.theme.colors.white
          : props.theme.colors.dark_grey};
    }
  }

  & .ticketsPage_sideMenu_new-list {
    & > * {
      color: ${(props) => props.theme.colors.grey};
    }
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.$isActive ? props.theme.colors.secondary : ''};

    .ticketsPage_sideMenu_list-item-icon {
      color: ${(props) =>
        props.$isActive
          ? props.theme.colors.light_green
          : props.theme.colors.grey};
    }

    .ticketsPage_sideMenu_list-item-text {
      & > * {
        color: ${(props) =>
          props.$isActive
            ? props.theme.colors.white
            : props.theme.colors.dark_grey};
      }
    }

    & .ticketsPage_sideMenu_new-list {
      & > * {
        color: ${(props) => props.theme.colors.grey};
      }
    }
  }
`

export const StyledListItemSecondaryAction = styled(ListItemSecondaryAction)`
  right: 23px;

  @media ${mediaQueries.small} {
    right: 16px;
  }
`

export const StyledChip = styled(Chip)`
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  font-weight: 600;
`
