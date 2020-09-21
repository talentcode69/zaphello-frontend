import React from 'react'
import { useMediaQuery } from '@material-ui/core'

import MobileToolbar from './Toolbar.mobile'
import DesktopToolbar from './Toolbar.desktop'

const Toolbar = () => {
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return isMobileScreen ? <MobileToolbar /> : <DesktopToolbar />
}

export default Toolbar
