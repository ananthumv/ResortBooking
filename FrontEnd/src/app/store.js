import { configureStore } from '@reduxjs/toolkit'
import resortReducer from '../features/resort/resortSlice'

const store = configureStore({
  reducer: {
    resort: resortReducer
  }
})

export default store