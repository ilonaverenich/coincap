import { createAction, createReducer } from "@reduxjs/toolkit";

const initialValue ={
    coin:[],
    listCoinState:[],
    countPrice:0,
    stateAddCoin: false,
    stateBriefcase: false,
    arrayNewPrice:[],
    activeCoin:[]
}

export const coinListAction = createAction('ADD_LIST_COIN')
export const addCountListAction = createAction('ADD_COUNT_LIST_COIN')
export const removeRepeatsCountListAction = createAction('REMOVE_REPEATS_COUNT_LIST_COIN')

export const calcCoinPrice = createAction('CALC_COIN_PRICE')
export const addNewPriceCoinArray = createAction('NEW_ARRAY_PRICE_COIN')

export const changeStateAddCoin = createAction('CHANGE_STATE_ADD_COIN')
export const changeStateBriefcase = createAction('CHANGE_STATE_BRIEFCASE')

export const changeActiveCoin = createAction('CHANGE_ACTIVE_COIN')

export const updateArrayBriefcase = createAction('UPDATE_ARRAY_BRIEFCASE')


export default createReducer(initialValue,{

    [coinListAction]: function(state,action){
        state.coin = [...state.coin, action.payload]
    },
    [addCountListAction]: function(state,action){
        state.listCoinState = [...state.listCoinState,...state.coin[0].filter(item=>item.id == action.payload.id)] 
   
    },
    [removeRepeatsCountListAction]: function(state,action){
     state.listCoinState = [...state.listCoinState.filter(item=>action.payload.id !==item.id )] 

     },
     [changeStateAddCoin]: function(state,action){
        state.stateAddCoin = action.payload;
         },
    [changeStateBriefcase]: function(state,action){
        state.stateBriefcase = action.payload;
         },

     [updateArrayBriefcase]: function(state,action){
        console.log(action.payload.id)
        state.listCoinState =  [...state.listCoinState.map(item=>item.id==action.payload.id)] 
        },
      [changeActiveCoin]: function(state,action){
            state.activeCoin = [...state.activeCoin, action.payload];
            },

     [addNewPriceCoinArray]: function(state,action){
     
       state.arrayNewPrice = [...state.arrayNewPrice, action.payload] 
       console.log(state.arrayNewPrice)
        },
        
    [calcCoinPrice]: function(state){
        state.countPrice = state.arrayNewPrice.reduce((a,b)=>a+b,0)
     },

    
})

