// createslice 
// initialize initial state
// slice  -> name , mention initial state , action 

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
 addtocart(state, action){
    state.push(action.payload)
    console.log(action);
 },
 removefromthecart(state, action){
   return state.filter(  item => item.id !== action.payload )

 },
    },

})

export const {addtocart ,removefromthecart} = cardSlice.actions

export default cardSlice.reducer