import styled from 'styled-components'

export const StyledTicketsSearchHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};

  .tickets_searchHeader_search {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) =>
      props.$isFilled ? props.theme.colors.background : 'transparent'};

    .MuiInput-underline:after,
    .MuiInput-underline:before {
      display: none;
    }
  }

  .tickets_searchHeader_search-icon {
    margin-right: 10px;
    font-size: 16px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  .tickets_searchHeader_search--clear-icon {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }

  input {
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: ${(props) => props.theme.colors.secondary};
      text-transform: capitalize;
    }
  }
`

export const StyledListPagination = styled.div`
  width: 183px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`
