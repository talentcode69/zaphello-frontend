import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledTicketsMenuHead = styled.div`
  padding: 7px 24px 0 24px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaQueries.small} {
    padding: 7px 17px 0 24px;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    text-transform: capitalize;
    margin: 0;
    color: ${(props) => props.theme.colors.dark_grey};

    @media ${mediaQueries.small} {
      font-size: 28px;
      line-height: 42px;
    }
  }

  .ticketsPage_ticketsMenuHead_add-button {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    width: 41px;
    height: 41px;
    padding: 0;
    font-size: 28px;
    font-weight: bold;

    svg {
      font-size: 18px;
      line-height: 18px;
    }

    @media ${mediaQueries.small} {
      width: 30px;
      height: 30px;
    }
  }
`
