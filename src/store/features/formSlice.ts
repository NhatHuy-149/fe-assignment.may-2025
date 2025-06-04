import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  data: Record<string, any>
  schemaText: string
  schema: any | null
}

const initialState: FormState = {
  data: {},
  schemaText: '',
  schema: null
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Record<string, any>>) => {
      state.data = action.payload
    },
    resetFormData: (state) => {
      state.data = {}
    },
    setSchemaText: (state, action: PayloadAction<string>) => {
      state.schemaText = action.payload
    },
    setSchema: (state, action: PayloadAction<any>) => {
      state.schema = action.payload
    },
    resetAll: (state) => {
      state.data = {}
      state.schemaText = ''
      state.schema = null
    }
  }
})

export const { 
  setFormData, 
  resetFormData, 
  setSchemaText, 
  setSchema, 
  resetAll 
} = formSlice.actions

export default formSlice.reducer
