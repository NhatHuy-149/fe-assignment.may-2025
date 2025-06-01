// import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// interface FormState {
//   data: any
// }

// const initialState: FormState = {
//   data: {}
// }

// export const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     setFormData: (state, action: PayloadAction<any>) => {
//       state.data = action.payload
//     },
//     resetFormData: (state) => {
//       state.data = {}
//     }
//   }
// })

// export const { setFormData, resetFormData } = formSlice.actions
// export default formSlice.reducer
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  data: Record<string, any>
  schemaText: string
  schema: any | null
}

const sampleSchema = `{
  "title": "Thông tin cá nhân",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Họ và tên"
    },
    "age": {
      "type": "number",
      "title": "Tuổi"
    },
    "gender": {
      "type": "string",
      "title": "Giới tính",
      "enum": ["Nam", "Nữ", "Khác"]
    },
    "address": {
      "type": "string",
      "title": "Địa chỉ",
      "format": "vietnam-address"
    }
  },
  "required": ["name", "age", "address"]
}`

const initialState: FormState = {
  data: {},
  schemaText: sampleSchema,
  schema: JSON.parse(sampleSchema)
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
      state.schemaText = sampleSchema
      state.schema = JSON.parse(sampleSchema)
    }
  }
})

export const { setFormData, resetFormData, setSchemaText, setSchema, resetAll } = formSlice.actions
export default formSlice.reducer
