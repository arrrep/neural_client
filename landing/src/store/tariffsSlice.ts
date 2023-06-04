import { createSlice } from '@reduxjs/toolkit'

interface ITariff {
  name: 'Ковид' | 'тест' | 'тест' | 'тест', 
  members: number | 'тест',
  traffic: number | 'тест',
  space: number,
  alwaysOnline: boolean
  price: number
}

const initialState: ITariff = {
  name: 'тест',
  members: 1,
  traffic: 0,
  space: 0,
  alwaysOnline: false,
  price: 0
}

const tariffsSlice = createSlice({
  name: 'тест',
  initialState: initialState,
  reducers: {
    updateTariff(state: ITariff, action) {
      const data = action.payload.props
      
      state.name = data.name
      state.price = data.price
      state.members = data.members.quant
      state.traffic = data.traffic.quant
      state.space = data.space.quant
      state.alwaysOnline = data.isOnline 
    },
  },
});

export const { updateTariff } = tariffsSlice.actions;
export default tariffsSlice.reducer;