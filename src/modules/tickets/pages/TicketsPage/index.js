import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useMediaQuery, Drawer, Box } from '@material-ui/core'
import qs from 'query-string'

import TicketsSideMenu from 'modules/tickets/components/TicketsPage/TicketsSideMenu'
import TicketsListHead from 'modules/tickets/components/TicketsPage/TicketsListHead'
import TicketsList from 'modules/tickets/components/TicketsPage/TicketsList'

import {
  useListSelection,
  ListSelectionContext,
} from 'modules/tickets/hooks/useListSelection'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

import { StyledTicketsPage } from './styles'

const tickets = [
  {
    id: 1,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: false,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 2,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: '',
    urgent: false,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 3,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: false,
  },
  {
    id: 4,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 5,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: false,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 6,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: '',
    urgent: false,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 7,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: false,
  },
  {
    id: 8,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 9,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: false,
  },
  {
    id: 10,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
  {
    id: 11,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: false,
  },
  {
    id: 12,
    name: 'how to track my order?',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum earum corporis ipsum error quia enim laudantium reiciendis facilis sed dolorum, expedita inventore? Sed itaque cumque voluptas voluptates amet animi.',
    customer_name: 'john smith',
    intent: 'refund',
    urgent: true,
    createdAt: '2020-08-15T21:47:24.072Z',
    open: true,
  },
]

const TicketsPage = () => {
  const [showTicketsSideMenu, setTicketsSideMenu] = useState(false)

  const isDesktopScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'))

  const {
    selectedItems,
    selectItem,
    deselectItem,
    selectAll,
    deselectAll,
    selectUrgent,
    selectOpen,
    selectClosed,
  } = useListSelection(tickets)

  const { search } = useLocation()
  const history = useHistory()

  const parsedQueryStrings = qs.parse(search)

  const { type: ticketsType } = parsedQueryStrings

  useEffect(() => {
    if (!ticketsType) {
      history.replace(`${ticketsRoutes.root}?type=assignedToYou`)
    }
  }, [history, ticketsType])

  const toggleSideMenu = () => setTicketsSideMenu((curr) => !curr)

  const SideMenu = () => (
    <TicketsSideMenu
      assignedToYouTicketsCount={128}
      unassignedTicketsCount={16}
      salesTicketsCount={24}
      facebookTicketsCount={8}
      facebookAdsTicketsCount={32}
      instagramAdsTicketsCount={48}
      toggleMenu={toggleSideMenu}
    />
  )

  return (
    <StyledTicketsPage>
      <aside>
        {isDesktopScreen && <SideMenu />}

        {!isDesktopScreen && (
          <Drawer
            open={showTicketsSideMenu}
            onClose={toggleSideMenu}
            onOpen={toggleSideMenu}
          >
            <SideMenu />
          </Drawer>
        )}
      </aside>

      <ListSelectionContext.Provider
        value={{
          selectedItems,
          selectItem,
          deselectItem,
          selectAll,
          deselectAll,
          selectUrgent,
          selectOpen,
          selectClosed,
          isAllSelected: tickets.every((ticket) =>
            selectedItems.includes(ticket.id)
          ),
        }}
      >
        <Box flexGrow={1}>
          <TicketsListHead toggleSideMenu={toggleSideMenu}>
            <TicketsList tickets={tickets} />
          </TicketsListHead>
        </Box>
      </ListSelectionContext.Provider>
    </StyledTicketsPage>
  )
}

export default TicketsPage
