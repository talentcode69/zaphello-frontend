import { useState, useCallback, createContext } from 'react'

export const ListSelectionContext = createContext()

export const useListSelection = (tickets = []) => {
  const [selectedItems, setSelectedItems] = useState([])

  const selectItem = useCallback((id) => {
    setSelectedItems((currentItems) => [...currentItems, id])
  }, [])

  const deselectItem = useCallback((id) => {
    setSelectedItems((currentItems) =>
      currentItems.filter((itemId) => itemId !== id)
    )
  }, [])

  const selectAll = useCallback(
    () => setSelectedItems(tickets.map((item) => item.id)),
    [tickets]
  )

  const deselectAll = useCallback(() => {
    setSelectedItems([])
  }, [])

  const selectUrgent = useCallback(() => {
    const urgentItems = tickets.filter((item) => Boolean(item.urgent))

    setSelectedItems(urgentItems.map((item) => item.id))
  }, [tickets])

  const selectOpen = useCallback(() => {
    const openItems = tickets.filter((item) => Boolean(item.open))

    setSelectedItems(openItems.map((item) => item.id))
  }, [tickets])

  const selectClosed = useCallback(() => {
    const closedItems = tickets.filter((item) => !item.open)

    setSelectedItems(closedItems.map((item) => item.id))
  }, [tickets])

  return {
    selectedItems,
    selectItem,
    deselectItem,
    selectAll,
    deselectAll,
    selectUrgent,
    selectOpen,
    selectClosed,
  }
}
