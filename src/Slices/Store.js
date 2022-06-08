import {configureStore} from '@reduxjs/toolkit'
import CountReducer from './CountSlice'

export default configureStore({reducer:{
  count: CountReducer
}})