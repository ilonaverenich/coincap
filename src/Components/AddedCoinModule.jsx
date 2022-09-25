import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeStateAddCoin, calcCoinPrice} from '../redux/mainReducer'



function AddedCoinModule() {
const stateAddCoin  = useSelector((store)=>store.data.stateAddCoin)
const coin = useSelector((store)=>store.data.listCoinState)
const [value,setInputValue] = useState(0)
const [arrayCount,setArrayCount] = useState([])
const [rezVal,setRezVal] = useState(0)
const dispatch = useDispatch()


function handleSubmit(){
/*    dispatch(changeStateAddCoin(false)) */
   setArrayCount([...arrayCount, +(+value * +(+(coin[0].priceUsd)).toFixed(2)).toFixed(2)])   
   let v = arrayCount.reduce((p,v)=>p+v,0)
   setRezVal(v)
   console.log(arrayCount)
} 
  return (
     <div className='modal'>
        <div className='modal__title-block'>
            <div className='modal__title-block_close'>
               <img src="https://i.postimg.cc/GtZzT2TC/icons8-24.png" alt="close" onClick={()=>dispatch(changeStateAddCoin(false))} />
            </div>
           <div className='modal__title-block_buy'>
           Купить 
           <p>{coin[0].name} </p>
           </div>
          <div className='modal__content'>
            <p className='modal__content_text'>  Введите количество: </p>
            <input onChange={(e)=>setInputValue(e.target.value)} value={value} className='modal__content_btn-input' />
            <p>
               Тестовый блок корзины: {rezVal}
            </p>
            <p>Цена за {value}  {coin[0].name} : {arrayCount[0]} $ </p>
            <button className='btn modal__content_btn-add' onClick={()=> handleSubmit()} >Добавить</button>
  
          </div>
            
        </div>
     

     </div>
  )
}

export default AddedCoinModule