import { createSlice } from '@reduxjs/toolkit'
import type {  PayloadAction } from '@reduxjs/toolkit'
import type { ColumnFiltersState, SortingState, PaginationState } from '@tanstack/react-table'

interface TableState {
  pagination: PaginationState
  columnFilters: ColumnFiltersState
  sorting: SortingState
}

const initialState: TableState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10
  },
  columnFilters: [],
  sorting: []
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<PaginationState>) => {
      state.pagination = action.payload
    },
    setColumnFilters: (state, action: PayloadAction<ColumnFiltersState>) => {
      state.columnFilters = action.payload
    },
    setSorting: (state, action: PayloadAction<SortingState>) => {
      state.sorting = action.payload
    }
  }
})

export const { setPagination, setColumnFilters, setSorting } = tableSlice.actions
export default tableSlice.reducer