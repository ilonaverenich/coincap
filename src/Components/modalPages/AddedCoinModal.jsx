import React,{useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {stateModalAddAction,listCoinsAction} from '../../redux/mainReducer'

function AddedCoinModule() {

const dispatch = useDispatch()
const [count,setInputCount] = useState()
const [state,setState] = useState(false)
const activeCoin = useSelector((store)=>store.data.activeCoin)
const textInput = useRef(null)

useEffect(()=>{
   textInput.current.focus()
},[]) 

function handleSubmit(){
   if(!isNaN(count)){ 
      dispatch(stateModalAddAction(false))
      dispatch(listCoinsAction({activeCoin,count}))
      }
   else{
      setState(true)
      } 

} 
  return (
     <div className='modal modal-add'>
        <div className='modal__title-block'>
            <div className='modal__title-block_close'>
               <img src="https://i.postimg.cc/vBb8Gvj3/icons8-48.png" width={30} title='close' alt="close" onClick={()=>dispatch(stateModalAddAction(false))} />
            </div> 
           <div className='modal__title-block_buy'>
              Купить <p> {activeCoin.name} </p> 
           </div>
  
          <div className='modal__content-box'>
            <div className='modal__content'>
            <p className='modal__content_text'>  Введите количество: </p>
               <input ref={textInput}  onChange={(e)=>setInputCount(e.target.value)} value={count || ''} className={state?'modal__content_btn-input input-error':'modal__content_btn-input'} />
                  {state ? <span>Ошибка! Неправильный формат данных! </span>:''}

            <button className='btn modal__content_btn-add' onClick={()=> handleSubmit()} >Добавить</button>
            </div>
  
          </div>
            
        </div>
     

     </div>
  )
}

export default AddedCoinModule