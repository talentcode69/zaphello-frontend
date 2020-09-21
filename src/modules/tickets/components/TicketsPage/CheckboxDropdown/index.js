import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropdownMenu from 'modules/core/components/DropdownMenu'
import MenuItem from 'modules/core/components/MenuItem'
import Checkbox from 'modules/core/components/Checkbox'

import { ListSelectionContext } from 'modules/tickets/hooks/useListSelection'

import { StyledCheckboxDropdown } from './styles'

const CheckboxDropdown = (props) => {
  const { borderedCheckbox, light, caretIcon } = props

  const {
    selectedItems,
    selectAll,
    deselectAll,
    selectUrgent,
    selectOpen,
    selectClosed,
    isAllSelected,
  } = useContext(ListSelectionContext)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const itemClickHandler = (callback) => () => {
    handleCloseMenu()
    callback()
  }

  return (
    <>
      <StyledCheckboxDropdown
        variant="text"
        onClick={handleOpenMenu}
        $isOpen={Boolean(anchorEl)}
        $light={light}
      >
        <Box display="flex" alignItems="center">
          <Checkbox
            bordered={borderedCheckbox}
            color="primary"
            onClick={(event) => event.stopPropagation()}
            checked={isAllSelected}
            onChange={(event) => {
              if (event.target.checked) selectAll()
              else deselectAll()
            }}
          />

          {caretIcon}
        </Box>

        {selectedItems.length > 0 && (
          <Typography className="tickets_CheckboxDropdown_selected-count">
            {selectedItems.length}
          </Typography>
        )}
      </StyledCheckboxDropdown>

      <DropdownMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        title="select"
      >
        <MenuItem text="all" onClick={itemClickHandler(selectAll)} />
        <MenuItem text="urgent" onClick={itemClickHandler(selectUrgent)} />
        <MenuItem text="open" onClick={itemClickHandler(selectOpen)} />
        <MenuItem text="closed" onClick={itemClickHandler(selectClosed)} />
      </DropdownMenu>
    </>
  )
}

CheckboxDropdown.propTypes = {
  borderedCheckbox: PropTypes.bool,
  light: PropTypes.bool,
  caretIcon: PropTypes.node,
}

CheckboxDropdown.defaultProps = {
  borderedCheckbox: false,
  light: false,
  caretIcon: <FontAwesomeIcon icon={['fas', 'caret-down']} />,
}

export default CheckboxDropdown
