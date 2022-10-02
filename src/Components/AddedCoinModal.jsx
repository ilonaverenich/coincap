import React,{useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeStateAddCoin, calcCoinPrice,addNewPriceCoinArray,changeActiveCoin} from '../redux/mainReducer'



function AddedCoinModule() {
const coin = useSelector((store)=>store.data.listCoinState)
const [value,setInputValue] = useState()
const [state,setState] = useState(false)

const textInput = useRef(null)

const dispatch = useDispatch()

useEffect(()=>{
   textInput.current.focus()
},[]) 

function handleSubmit(){
   if(!isNaN(value)){
      dispatch(addNewPriceCoinArray(coin))
      dispatch(changeActiveCoin(+value))
        /*  dispatch(addNewPriceCoinArray(+(+value * +(+(coin[coin.length-1].priceUsd)).toFixed(2)).toFixed(2))) */
         /* dispatch(calcCoinPrice()) */
         dispatch(changeStateAddCoin(false))
      }
      else{
         setState(true)
      } 

} 
  return (
     <div className='modal'>
        <div className='modal__title-block'>
            <div className='modal__title-block_close'>
               <img src="https://i.postimg.cc/GtZzT2TC/icons8-24.png" title='close' alt="close" onClick={()=>dispatch(changeStateAddCoin(false))} />
            </div>
           <div className='modal__title-block_buy'>
              Купить 
           <p>{coin[coin.length-1].name}</p>
           </div>
  
          <div className='modal__content-box'>
            <div className='modal__content'>
            <p className='modal__content_text'>  Введите количество: </p>
               <input ref={textInput}  onChange={(e)=>setInputValue(e.target.value)} value={value} className={state?'modal__content_btn-input input-error':'modal__content_btn-input'} />
                  {state ? <span>Ошибка! Неправильный формат данных! </span>:''}
            <button className='btn modal__content_btn-add' onClick={()=> handleSubmit()} >Добавить</button>
            </div>
  
          </div>
            
        </div>
     

     </div>
  )
}

export default AddedCoinModule