import {useSelector, useDispatch} from 'react-redux'
import {deleteBriefCaseAction} from '../redux/mainReducer'
import React,{useState, useEffect, useRef} from 'react'
import {calcTotalValue} from '../redux/totalReducer'


function TableBriefCase() {
    const dispatch = useDispatch();
    const listCoins = useSelector((store)=>store.data.listCoins)
    const resultCase = useSelector((store)=>store.data.resultCase)

    function handleFunc(id){
     dispatch(deleteBriefCaseAction(id))
     dispatch(calcTotalValue(resultCase))

    } 


  return (
    <div className='table'>
    <div>
   
    </div>
       {listCoins.length==0?<p className="case">Корзина пуста</p>:''}
        <table className='table'>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Итого</th>
            <th></th>
          </tr>
        
           {listCoins && listCoins.map((item,index)=><tr key={index}>
            <td>{item.activeCoin.name}</td>
            <td>{(+item.activeCoin.priceUsd).toFixed(2)} $</td>
            <td>{item.count}</td>
            <td>
              {(+item.count * (+item.activeCoin.priceUsd).toFixed(2)).toFixed(2)} $</td>
            <td className='delete-row' onClick={()=>handleFunc(item.activeCoin.id)}><img src="https://i.postimg.cc/XvHDMLCS/icons8-24.png" title='delete' alt="delete"/></td>
           </tr>
          )} 


    {/* {listCoins && listCoins.map((item,index)=><tr key={index}>
            <td>{item.activeCoin.name}</td>
            <td>{(+item.activeCoin.priceUsd).toFixed(2)} $</td>
            <td>{item.count}</td>
            <td>
              {(+item.count * (+item.activeCoin.priceUsd).toFixed(2)).toFixed(2)} $</td>
            <td className='delete-row' onClick={()=>handleFunc(item.activeCoin.id)}><img src="https://i.postimg.cc/XvHDMLCS/icons8-24.png" title='delete' alt="delete"/></td>
           </tr>
          )}   */}
   
        </table>
       
          <div className='total'>Итого:<p>{resultCase} {/* {JSON.parse(localStorage.getItem('active')).resultCase} */} $</p></div>
       </div>
  )
}

export default TableBriefCase