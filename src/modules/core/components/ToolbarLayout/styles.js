import styled from 'styled-components'

export const StyledContent = styled.div`
  ${(props) =>
    props.isMobileScreen ? 'padding-bottom: 64px;' : 'padding-left: 64px;'}
`
