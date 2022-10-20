import { createAction, createReducer } from "@reduxjs/toolkit";


const initialValue ={
 /*    newCoins:[],
    newArr:[], */
    totalValue:0
 
}


/* export const creactNewList = createAction('CREATE_NEW_LIST') */
export const calcTotalValue = createAction('CALC_TOTAL_ACTION')



export default createReducer(initialValue,{

/*     [creactNewList]: function(state, action){      
        state.newArr = [...state.listCoins.filter(item=>item.activeCoin.id!==action.payload.activeCoin.id), action.payload]
      },
     */

    [calcTotalValue]: function(state, action){    
        
      state.totalValue = action.payload;
      console.log(state.totalValue)  
    },
  
   
})