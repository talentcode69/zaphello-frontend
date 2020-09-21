import styled from 'styled-components'

import { ListItem } from '@material-ui/core'

import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledDesktopTicketsListItem = styled(ListItem)`
  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.border : props.theme.colors.white};
  padding: 19px 50px 18px 22px;
  width: 100%;
  height: 80px;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }

  .tickets_DesktopTicketsListItem_checkbox {
    margin-right: 10px;
  }

  .tickets_DesktopTicketsListItem_info-wrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tickets_DesktopTicketsListItem_name-description {
    margin-right: 93px;
  }

  .tickets_DesktopTicketsListItem_name {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }

  .tickets_DesktopTicketsListItem_description {
    font-weight: 300;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.mild_grey};
    width: 470px;
  }

  .tickets_DesktopTicketsListItem_right {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
  }

  .tickets_DesktopTicketsListItem_customer-name {
    color: ${(props) => props.theme.colors.mild_grey};
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
  }

  .tickets_DesktopTicketsListItem_tag {
    padding-left: 32px;
  }

  .tickets_DesktopTicketsListItem_date {
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.mild_grey};
    padding-left: 40px;
  }
`

export const StyledTag = styled.div`
  display: inline-block;
  border-radius: 2px;
  padding: 3px;
  background-color: ${(props) => {
    if (props.$isUrgent) return props.theme.colors.light_red

    return props.$light
      ? props.theme.colors.border
      : props.theme.colors.mild_grey
  }};

  &:not(:last-child) {
    margin-right: 4px;
  }

  & > p {
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${(props) => {
      if (props.$isUrgent) return props.theme.colors.error

      return props.$light
        ? props.theme.colors.dark_grey
        : props.theme.colors.white
    }};
  }
`

export const StyledMobileTicketsListItem = styled(ListItem)`
  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.border : props.theme.colors.white};
  padding: 20px 13px 5px 10px;
  width: 100vw;
  height: 146px;
  align-items: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }

  @media ${mediaQueries.large} {
    width: calc(100vw - 64px);
    height: 110px;
  }

  .tickets_MobileTicketsListItem_checkbox {
    margin-right: 4px;
  }

  .tickets_MobileTicketsListItem_info-wrapper {
    flex-grow: 1;
  }

  .tickets_MobileTicketsListItem_name {
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
  }

  .tickets_MobileTicketsListItem_description {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.mild_grey};
    width: 250px;
    margin-bottom: 6px;

    @media ${mediaQueries.medium} {
      width: 470px;
      margin-bottom: 0;
    }
  }

  .tickets_MobileTicketsListItem_customer-name {
    color: ${(props) => props.theme.colors.mild_grey};
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .tickets_MobileTicketsListItem_date {
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.mild_grey};
  }

  .tickets_MobileTicketsListItem_desc-tag {
    @media ${mediaQueries.small} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
