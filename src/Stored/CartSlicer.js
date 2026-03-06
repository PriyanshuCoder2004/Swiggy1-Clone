import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'createslice',
    initialState: {
        items:[],
        count:0
    },
    reducers:{
        addItems: (state,action)=>{
            state.items.push({...action.payload, quantity:1});
            state.count++;
        },

        IncrementItems: (state,action)=>{
            const element = state.items.find(item=>item.id===action.payload.id);
            element.quantity+=1;
            state.count++;
        },

        DecrementItems: (state, action) => {
         const index = state.items.findIndex(item => item.id === action.payload.id);
    
          if (index !== -1) {
          const element = state.items[index];
        
          if (element.quantity > 1) {
            // Just reduce quantity
            element.quantity -= 1;
          } else {
            // Remove the item entirely from the array
            state.items.splice(index, 1);
         }
        
         // Only decrement the total count if we actually found and removed something
          // AND ensure it doesn't go below zero
         state.count = Math.max(0, state.count - 1);
    }
       }  

    }
})

export const {addItems,IncrementItems,DecrementItems}= cart.actions;
export default cart.reducer;