import React,{useState, useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'


function InfoCoin() {
  const coinActive = useSelector((store)=>store.data.activeCoin)

  return (
    <div className='content'>
      <div className='content__box-name'>
        <div className='content__box-name title'>
          {coinActive.name}
        </div>
        <div className='content__box-name symbol'>
           {coinActive.symbol}
        </div>
          
      </div>
      
      
      
    </div>
  )
}

export default InfoCoin