import styled from 'styled-components'
import { AppBar } from '@material-ui/core'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledTicketsHeaderMobile = styled.div`
  padding: 18px 12px 15px 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  width: 100vw;

  @media ${mediaQueries.large} {
    width: calc(100vw - 64px);
  }

  .tickets_MobileTicketsHeader_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .tickets_MobileTicketsHeader_title-wrapper {
    display: flex;
    align-items: center;
  }

  .tickets_MobileTicketsHeader_menu-button {
    font-size: 20px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.white_blue};
    margin-right: 6px;
  }

  .tickets_MobileTicketsHeader_title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
  }

  .tickets_MobileTicketsHeader_search-button {
    font-size: 20px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.white};
  }

  .tickets_MobileTicketsHeader_filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tickets_MobileTicketsHeader_checkbox-dropdown {
    display: flex;
    align-items: center;
    margin-left: -3px;
  }

  .tickets_MobileTicketsHeader_checkbox-dropdown-caret {
    color: ${(props) => props.theme.colors.white_blue};
  }

  .tickets_MobileTicketsHeader_filters-button {
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    padding: 0 16px;
  }

  .tickets_MobileTicketsHeader_filters-button-icon {
    font-size: 18px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.white_blue};
  }

  .tickets_MobileTicketsHeader_filters-count {
    min-width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 2px;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.dark_grey};
    background-color: ${(props) => props.theme.colors.white_blue};
  }
`

export const StyledAppBar = styled(AppBar)`
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.16);
  top: 0;
  left: 0;
  right: 0;

  @media ${mediaQueries.large} {
    left: 64px;
  }
`

export const StyledSearchBar = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  height: 66px;
  display: flex;
  align-content: stretch;

  .tickets_MobileSearchBar_back-button {
    font-size: 20px;
    line-height: 20px;
    border-radius: 0;
    padding: 15px;
  }

  .tickets_MobileSearchBar_search-input {
    padding: 5px;

    input {
      &::placeholder {
        font-weight: 500;
        font-size: 17px;
        line-height: 25px;
      }
    }
  }
`

export const StyledContent = styled.main`
  padding-top: ${(props) => (props.$isSearchActive ? '66px' : '122px')};
`
