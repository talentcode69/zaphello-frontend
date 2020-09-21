import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from '@material-ui/core'

import Toolbar from '../Toolbar'

import { StyledContent } from './styles'

const ToolbarLayout = ({ children }) => {
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <>
      <Toolbar />

      <StyledContent isMobileScreen={isMobileScreen}>{children}</StyledContent>
    </>
  )
}

ToolbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ToolbarLayout
