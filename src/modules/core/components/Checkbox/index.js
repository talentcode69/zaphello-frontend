import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledCheckbox } from './styles'

const Checkbox = (props) => {
  const { bordered, lightBorder, ...restProps } = props

  const unCheckedIcon = bordered ? (
    <span className="fa-layers fa-fw">
      <FontAwesomeIcon
        icon={['fas', 'square']}
        className="core_Checkbox_checkbox-icon"
      />

      <FontAwesomeIcon
        icon={['far', 'square']}
        className="core_Checkbox_checkbox-icon unchecked-border-icon"
      />
    </span>
  ) : (
    <span className="fa-layers fa-fw">
      <FontAwesomeIcon
        icon={['fas', 'square']}
        className="core_Checkbox_checkbox-icon"
      />
    </span>
  )

  return (
    <StyledCheckbox
      icon={unCheckedIcon}
      $lightBorder={lightBorder}
      checkedIcon={
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon
            icon={['fas', 'check-square']}
            className="core_Checkbox_checkbox-icon check-icon"
          />
        </span>
      }
      {...restProps}
    />
  )
}

Checkbox.propTypes = {
  bordered: PropTypes.bool,
  lightBorder: PropTypes.bool,
}

Checkbox.defaultProps = {
  bordered: false,
  lightBorder: false,
}

export default Checkbox
