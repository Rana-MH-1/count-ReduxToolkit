import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getDataUsers = createAsyncThunk("users/getDataUsers", async (rejectWithValue) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;    
  } catch (error) {
    return rejectWithValue(error.response.data.message)
  }
});

const CountSlice = createSlice({
  name:'count',
  initialState:{
    count:0,
    error:null,
    loading:false,
    users:[]
  },
  reducers:{
    increment : (state,{type,payload})=>{
      state.count++
    },
    Decrement : (state,{type,payload})=>{
      state.count -= 1; 
    },
    IncrementByReference:(state,{type,payload})=>{
      state.count += payload
    }
  },
  extraReducers:{
    [getDataUsers.pending]:(state)=>{
      state.loading= true
    },
    [getDataUsers.fulfilled]:(state,{type,payload})=>{
      state.loading=false;
      state.users = payload
    },
    [getDataUsers.rejected]: (state,{type,payload})=>{
      state.loading= false;
      state.errors= payload
    }
  }
})

export default CountSlice.reducer
export const {increment,Decrement,IncrementByReference} = CountSlice.actions