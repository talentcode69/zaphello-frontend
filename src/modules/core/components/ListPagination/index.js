import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledListPagination, StyledIconButton } from './styles'

const ListPagination = (props) => {
  const { count, page, countPerPage, next, back } = props

  const firstItem = (page - 1) * countPerPage + 1
  const lastItem = firstItem + countPerPage - 1

  return (
    <StyledListPagination>
      <div className="core_listPagination_text">{`${firstItem}-${lastItem} of ${count}`}</div>

      <div>
        <StyledIconButton onClick={back} disabled={firstItem === 1}>
          <FontAwesomeIcon icon={['far', 'chevron-left']} />
        </StyledIconButton>

        <StyledIconButton onClick={next} disabled={lastItem === count}>
          <FontAwesomeIcon icon={['far', 'chevron-right']} />
        </StyledIconButton>
      </div>
    </StyledListPagination>
  )
}

ListPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  countPerPage: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
}

export default ListPagination
