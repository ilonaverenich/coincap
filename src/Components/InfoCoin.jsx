import React,{useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {listCoinsAction} from '../redux/mainReducer'
import Briefcase from './BriefcaseModal';
import shortenNumRu from '../shortenNumRu';
import Graphs from './Graphs';


function InfoCoin() {

  const activeCoin = useSelector((store)=>store.data.activeCoin)
  const stateModalBriefCase = useSelector((state)=>state.data.stateModalBriefCase)
  const listCoins = useSelector((state)=>state.data.listCoins)
  const [state,setState] = useState(false)
  const [count,setInputCount] = useState()

  const navigate = useNavigate();
  const textInput = useRef(null)
  const dispatch = useDispatch();

  useEffect(()=>{
    textInput.current.focus()
   
 },[]) 

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
    <div>
      {stateModalBriefCase?<Briefcase/>:''}
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
       <table className='table__info-coin'>
       <tbody>
          <tr>
            <th>Информация</th>
            <th>Данные о валюте</th>
          </tr>
         
          <tr>
            <td>Цена</td>
            <td><b>{(+activeCoin.priceUsd).toFixed(2)} $</b></td>
          </tr>
        
          <tr>
            <td>Доступное предложение для торговли</td>
            
            <td>{shortenNumRu(+(+activeCoin.supply).toFixed(0))} </td>
          </tr>
          <tr>
            <td>Общее кол-во выпущенных активов</td>
          
            <td>{shortenNumRu(+(+activeCoin.maxSupply).toFixed(0))}</td>
          </tr>
          <tr>
            <td>Объем торгов за последние 24 часа</td>
            <td>  {shortenNumRu(+(+activeCoin.volumeUsd24Hr).toFixed(0))} </td>
          </tr>
          
          <tr>
            <td>Средняя цена по объёму за последние 24 часа</td>
            <td>{(+activeCoin.vwap24Hr).toFixed(2)} $</td>
          </tr>
          <tr>
            <td>Процентное изменения цены за последние 24 часа</td>
             <td className={activeCoin.changePercent24Hr[0]=='-'?'red':'green'}>{ ( +activeCoin.changePercent24Hr).toFixed(2)} %</td> 
            
          </tr>
          <tr>
            <td>Сайт</td>
            <td><a target='_blank' href={`${activeCoin.explorer}`}> {activeCoin.explorer}</a></td>
          </tr>

          </tbody>
        </table> 
      </div>
     

      <div className='content__graph'>
          <Graphs /> 
      </div>
      
    </div>
    </div>
  )
}

export default InfoCoin