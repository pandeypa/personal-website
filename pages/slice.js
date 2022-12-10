import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  }
})

export const { toggle } = toggleSlice.actions

export default toggleSlice.reducer