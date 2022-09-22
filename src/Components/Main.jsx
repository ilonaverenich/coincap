import {setValue,coinListAction} from '../redux/mainReducer';
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Icon from './Icon';


//https://api.coincap.io/v2/assets?limit=10

function Main() {
  const [coins, setCoins] = useState([])

   const dispatch = useDispatch()

   useEffect(()=>{
    axios.get('https://api.coincap.io/v2/assets').then(res=>{
      dispatch(coinListAction(res.data.data))
      setCoins(res.data.data);
      localStorage.setItem('coin',res.data.data);
    })
   },[])



  return (
     <section className='content'>
          <div className='content__table'>
            <table>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>Sumbol</th>
                <th>Price</th>
                <th>Add</th>
              </tr>
              {coins && coins.map(item=> <tr >
                <td className='table-rank'>{item.rank}</td>
                <td className='table-name'>{item.name}</td>
                <td> {item.symbol} </td>
                <td> {(+item.priceUsd).toFixed(2)}$ </td>
                <Icon id={item.id} priceUsd={(+item.priceUsd).toFixed(2)}/>
            
              </tr>)}
             
            </table>

       
     
          </div>
    </section>
  )
}

export default Main


/*    function calcMaxValue(){
     console.log(coins.map(el=>+(+el.priceUsd).toFixed(2)).sort((a,b)=>b-a).slice(0,3))
   } */
/*    function addCoinList(el){
    dispatch(addStateAction(el.id))
    console.log(el.id,id)
      id.includes(el.id) ?setState(true):setState(false)
   } */