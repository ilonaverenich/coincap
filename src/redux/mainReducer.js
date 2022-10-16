import { createAction, createReducer } from "@reduxjs/toolkit";

const initialValue ={
    coin:[],
    stateModalAdd: false,
    stateModalBriefCase: false,
    activeCoin:[],
    listCoins:[],
    resultCase:0
 
}

export const coinListAction = createAction('ADD_LIST_COIN')
export const stateModalAddAction = createAction('STATE_MODAL_ADD')
export const stateModalBriefCaseAction = createAction('STATE_MODAL_BRIEFCASE_ACTION')
export const activeCoinAction = createAction('ACTIVE_COIN_ACTION')
export const listCoinsAction = createAction('LIST_COINS_ACTION')
export const deleteBriefCaseAction = createAction('DELETE_BRIEFCASE_ACTION')



export default createReducer(initialValue,{

    [coinListAction]: function(state,action){
        state.coin = [...state.coin, action.payload]
    },

    [stateModalAddAction]: function(state, action){
        state.stateModalAdd = action.payload; 
    },
    [stateModalBriefCaseAction]: function(state, action){
        state.stateModalBriefCase = action.payload; 
    },
    [activeCoinAction]: function(state, action){
        state.activeCoin = action.payload; 
    },
    [listCoinsAction]: function(state, action){      
      state.listCoins = [...state.listCoins.filter(item=>item.activeCoin.id!==action.payload.activeCoin.id), action.payload]
      state.resultCase = [...state.listCoins.map(item=>Number((+(+item.activeCoin.priceUsd).toFixed(2)*(+item.count)).toFixed(2)))].reduce((prev,curr)=>prev+curr,0).toFixed(2)
    },
    [deleteBriefCaseAction]: function(state, action){
      state.listCoins = [...state.listCoins.filter(item=>item.activeCoin.id!==action.payload)]
      state.resultCase = [...state.listCoins.map(item=>Number((+(+item.activeCoin.priceUsd).toFixed(2)*(+item.count)).toFixed(2)))].reduce((prev,curr)=>prev+curr,0).toFixed(2)
      },
   
})