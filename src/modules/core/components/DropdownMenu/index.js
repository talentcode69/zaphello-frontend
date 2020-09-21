import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '@material-ui/core'

import MenuItem from '../MenuItem'

const DropdownMenu = (props) => {
  const { children, title, ...restProps } = props

  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      getContentAnchorEl={null}
      MenuListProps={{ disablePadding: true }}
      disableScrollLock
      {...restProps}
    >
      {title && <MenuItem text={title} isTitle disabled />}

      {children}
    </Menu>
  )
}

DropdownMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

DropdownMenu.defaultProps = {
  title: null,
}

export default DropdownMenu
