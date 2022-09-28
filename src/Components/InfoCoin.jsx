import React,{useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addNewPriceCoinArray,calcCoinPrice} from '../redux/mainReducer'
import { useNavigate } from "react-router-dom";


function InfoCoin() {
  const coinActive = useSelector((store)=>store.data.activeCoin)
  const coin = useSelector((store)=>store.data.listCoinState)
  const [state,setState] = useState(false)
  const [value,setInputValue] = useState()
  const navigate = useNavigate();
  const textInput = useRef(null)
  const dispatch = useDispatch();

  useEffect(()=>{
    textInput.current.focus()
 },[]) 

  function handleSubmit(){
    if(isNaN(+value)){
      setState(true)
    }
    else {
      dispatch(addNewPriceCoinArray(+(+value * +(+(coinActive.priceUsd)).toFixed(2)))) 
      setState(false)
      setInputValue('')
      dispatch(calcCoinPrice())
      navigate(-1)
    }
  }

  return (
    <div className='content'>
      <div className='content__box-name'>
      <div className='content__box-name symbol'>
           {coinActive.symbol}
        </div>
        <div className='content__box-name title'>
          {(coinActive.name).toUpperCase()}
        </div>
        
          
      </div>

      <div className='info__content'>
          <p className='info__content_count'><b>Введите количество:</b></p>
          <input ref={textInput}  value={value} onChange={(e)=>setInputValue(e.target.value)}   className={state?'info__content_btn-input input-error':'info__content_btn-input'}/>
          <button className='btn info__content_btn' onClick={()=>handleSubmit()}>Купить</button>
          {state ? <span>Ошибка! Неправильный формат данных! </span>:''}
      </div>

      <div>
        <table className='table__info-coin'>
          <tr>
            <th>Информация</th>
            <th>Данные о валюте</th>
          </tr>
          <tr>
            <td>Цена</td>
            <td><b>{(+coinActive.priceUsd).toFixed(2)} $</b></td>
          </tr>
          <tr>
            <td>Доступное предложение для торговли</td>
            <td>{(+coinActive.supply).toFixed(0)}</td>
          </tr>
          <tr>
            <td>Общее кол-во выпущенных активов</td>
            <td>{(+coinActive.maxSupply).toFixed(0)}</td>
          </tr>
          <tr>
            <td>Объем торгов за последние 24 часа</td>
            <td>{(+coinActive.volumeUsd24Hr).toFixed(0)} $</td>
          </tr>
          
          <tr>
            <td>Средняя цена по объёму за последние 24 часа</td>
            <td>{(+coinActive.vwap24Hr).toFixed(2)} $</td>
          </tr>
          <tr>
            <td>Процентное изменения цены за последние 24 часа</td>
            <td className={coinActive.changePercent24Hr[0]=='-'?'red':'green'}>{(+coinActive.changePercent24Hr).toFixed(2)}%</td>
            
          </tr>
         
        </table>
      </div>
     

      <div>
          <p className='info__content_btn-count'>тут будет график</p>
         
      </div>
      
    </div>
  )
}

export default InfoCoin