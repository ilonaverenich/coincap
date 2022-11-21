
import Graphs from './Graphs';
import React,{useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from "react-router-dom";
import {listCoinsAction} from '../../redux/mainReducer'
import InfoCoinTable from './InfoCoinTable';

function InfoCoinContent() {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const activeCoin = useSelector((store)=>store.data.activeCoin)
    const stateModalBriefCase = useSelector((state)=>state.data.stateModalBriefCase)
    const [state,setState] = useState(false)
    const [count,setInputCount] = useState()

    const textInput = useRef(null)


    function handleSubmit(){
        if(isNaN(+count)){
          setState(true)
        }
        else {    
          dispatch(listCoinsAction({activeCoin,count}))
          setState(false)
          setInputCount('')
          navigate(-1)    
      
        }
      }
    
  return (
 <div className={stateModalBriefCase? 'content transpatent fixed':'content '}>
    
      <div className='content__box-name'>
     
      <div className='content__box-name symbol'>
           {activeCoin.symbol}  
        </div>
        <div className='content__box-name title'>
           {activeCoin.name} 
        </div>
        
          
      </div>

      <div className='info__content'>
          <p className='info__content_count'><b>Введите количество:</b></p>
          <input ref={textInput}  value={count|| ''} onChange={(e)=>setInputCount(e.target.value)}   className={state?'info__content_btn-input input-error':'info__content_btn-input'}/>
          <button className='btn info__content_btn' onClick={()=>handleSubmit()}>Купить</button>
          {state ? <span>Ошибка! Неправильный формат данных! </span>:''}
      </div>

      <div>
        <InfoCoinTable/>

      </div>
     

      <div className='content__graph'>
          <Graphs /> 
      </div>
      <div className='content__back-btn' onClick={()=> navigate(-1)}>   	
              &#8592; Назад
        </div>
    </div> 
  )
}

export default InfoCoinContent