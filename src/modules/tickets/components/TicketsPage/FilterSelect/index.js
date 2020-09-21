import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropdownMenu from 'modules/core/components/DropdownMenu'

import { StyledSelectButton } from './styles'

const FilterSelect = (props) => {
  const {
    children,
    icon,
    value,
    placeholder,
    menuTitle,
    onClose,
    light,
    large,
  } = props

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <StyledSelectButton
        variant="text"
        $isOpen={Boolean(anchorEl)}
        $light={light}
        $large={large}
        $hasValue={Boolean(value)}
        onClick={handleOpenMenu}
      >
        {icon && <div className="tickets_FilterSelect_icon">{icon}</div>}

        <div className="tickets_FilterSelect_text">{value || placeholder}</div>

        <div className="tickets_FilterSelect_arrow">
          <FontAwesomeIcon icon={['far', 'chevron-down']} />
        </div>
      </StyledSelectButton>

      <DropdownMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        title={menuTitle}
        TransitionProps={{
          unmountOnExit: true,
          onExited: () => {
            if (typeof onClose === 'function') {
              onClose()
            }
          },
        }}
      >
        {children(handleCloseMenu)}
      </DropdownMenu>
    </div>
  )
}

FilterSelect.propTypes = {
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  icon: PropTypes.node,
  value: PropTypes.string,
  menuTitle: PropTypes.string,
  placeholder: PropTypes.string,
  light: PropTypes.bool,
  large: PropTypes.bool,
}

FilterSelect.defaultProps = {
  icon: null,
  value: '',
  menuTitle: '',
  placeholder: 'Select...',
  onClose: null,
  light: false,
  large: false,
}

export default FilterSelect
