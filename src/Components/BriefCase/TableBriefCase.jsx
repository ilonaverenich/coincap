import {useSelector, useDispatch} from 'react-redux'
import {deleteBriefCaseAction,newArrayAction,calcTotalValue,costArrayAction} from '../../redux/mainReducer'
import React,{useState, useEffect} from 'react'
import axios from 'axios';

function TableBriefCase() {

    const dispatch = useDispatch();

    const resultCase = useSelector((store)=>store.data.resultCase)
    const newList = useSelector((store)=>store.data.newList)
    const listCoins = useSelector((store)=>store.data.listCoins)

    const [list, setList] = useState(listCoins.map(el=>el.activeCoin.id))
    const [count, setCount] = useState(listCoins.map(el=>+el.count))

    useEffect(()=>{
    axios.get('https://api.coincap.io/v2/assets/').then(res=>{
        let main = res.data.data
        setList(listCoins.map(el=>el.activeCoin.id));
        dispatch(newArrayAction({main,list}))
        dispatch(costArrayAction())
      }) 
    },[])

  useEffect (()=>{
    setCount(listCoins.map(el=>+el.count))
    dispatch(calcTotalValue(count))
  })

    function handleFunc(id){
     dispatch(deleteBriefCaseAction(id))
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
          
     
           {listCoins  && listCoins.map((item,index)=><tr key={index}>
        
            <td>{item.activeCoin.name}</td>
            <td>{newList && newList[index] && (+newList[index].priceUsd).toFixed(2)}</td>
            <td>{item.count}</td>
            <td>{newList && newList[index] && +(newList[index] && (+(+newList[index].priceUsd).toFixed(2)* + item.count)).toFixed(2)} $</td> 
            <td className='delete-row' onClick={()=>handleFunc(item.activeCoin.id)}><img src="https://i.postimg.cc/XvHDMLCS/icons8-24.png" title='delete' alt="delete"/></td>
           </tr>
          )} 
        </table>
       
          <div className='total'>Итого:<p> {resultCase} $</p></div>
       </div>
  )
}

export default TableBriefCase