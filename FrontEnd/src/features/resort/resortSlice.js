import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookings: [],
  featured: {
    title: 'Ocean Breeze Resort',
    tagline: 'Relax. Recharge. Rediscover.'
  }
}

const resortSlice = createSlice({
  name: 'resort',
  initialState,
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload)
    },
    clearBookings(state) {
      state.bookings = []
    }
  }
})

export const { addBooking, clearBookings } = resortSlice.actions
export default resortSlice.reducer
