import React from 'react'
import { FeaturesEntity } from '../types/earthQuakFeatureTypes'

export const useSortableData = (items: FeaturesEntity[], config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config)
  const sortedItems = React.useMemo(() => {
    const sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a.properties[sortConfig.key] < b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a.properties[sortConfig.key] > b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = key => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort }
}