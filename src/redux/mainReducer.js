import { createAction, createReducer } from "@reduxjs/toolkit";

const initialValue ={
    coin:[],
    listCoinState:[],
    countPrice:0,
    stateAddCoin: false
}

export const coinListAction = createAction('ADD_LIST_COIN')
export const addCountListAction = createAction('ADD_COUNT_LIST_COIN')
export const removeRepeatsCountListAction = createAction('REMOVE_REPEATS_COUNT_LIST_COIN')

export const calcCoinPrice = createAction('CALC_COIN_PRICE')

export const changeStateAddCoin = createAction('CHANGE_STATE_ADD_COIN')


export default createReducer(initialValue,{

    [coinListAction]: function(state,action){
        state.coin = [...state.coin, action.payload]
    },
    [addCountListAction]: function(state,action){
       //выбранные коины
    state.listCoinState = [...state.listCoinState,...state.coin[0].filter(item=>item.id == action.payload.id)] 
   /*  console.log(state.listCoinState)
    state.countPrice = [...state.listCoinState.map(item=>(Number(item.priceUsd)).toFixed(2)).map(el=>+el)].reduce((a,b)=>a+b,0).toFixed(2) */
    },
    [removeRepeatsCountListAction]: function(state,action){
     state.listCoinState = [...state.listCoinState.filter(item=>action.payload.id !==item.id )] 
/*      state.countPrice = [...state.listCoinState.map(item=>(Number(item.priceUsd)).toFixed(2)).map(el=>+el)].reduce((a,b)=>a+b,0).toFixed(2)
     console.log(state.listCoinState) */

     },

     [changeStateAddCoin]: function(state,action){
       state.stateAddCoin = action.payload;
        },



     
  /*    [calcCoinPrice]: function(state){
        state.countPrice = [...state.listCoinState.map(item=>(Number(item.priceUsd)).toFixed(2)).map(el=>+el)].reduce((a,b)=>a+b,0).toFixed(2)
         console.log(state.countPrice)
        }, */
     

    /* [addStateAction]: function(state,action){
        state.id = [...state.id,...state.coin[0].filter(item=>item.id == action.payload).map(el=>el.id)] */
    
/*         state.addButtonState = [...state.coin.filter(item=>action.payload !== item.id)] */
    /*  console.log(state.addButtonState[0].filter(item=>item.id=='bitcoin'))  },*/
   
})

/* [...state.modules.filter(item => action.payload !== item.id)] */