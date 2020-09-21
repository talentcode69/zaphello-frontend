import React, { useState } from 'react'
import { useIntl } from 'react-intl'

import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ListPagination from 'modules/core/components/ListPagination'

import { StyledTicketsSearchHeader, StyledListPagination } from './styles'

const TicketsSearchHeader = () => {
  const [keyword, setKeyword] = useState('')

  const { formatMessage } = useIntl()

  return (
    <StyledTicketsSearchHeader $isFilled={Boolean(keyword)}>
      <div className="tickets_searchHeader_search">
        <TextField
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder={formatMessage({
            id: 'tickets.search.tickets',
            defaultMessage: 'search tickets',
          })}
          InputProps={{
            'aria-label': 'search',
            startAdornment: (
              <InputAdornment className="tickets_searchHeader_search-icon">
                <FontAwesomeIcon icon={['fal', 'search']} />
              </InputAdornment>
            ),
            endAdornment: keyword ? (
              <InputAdornment
                className="tickets_searchHeader_search--clear-icon"
                component={IconButton}
                onClick={() => setKeyword('')}
              >
                <FontAwesomeIcon icon={['fal', 'times']} />
              </InputAdornment>
            ) : null,
          }}
          fullWidth
        />
      </div>

      <StyledListPagination>
        <ListPagination
          count={120}
          page={1}
          countPerPage={10}
          next={() => {}}
          back={() => {}}
        />
      </StyledListPagination>
    </StyledTicketsSearchHeader>
  )
}

export default TicketsSearchHeader
