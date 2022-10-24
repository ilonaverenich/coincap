import {useSelector, useDispatch} from 'react-redux'
import {deleteBriefCaseAction,listCoinsAction,coinListAction,newArrayAction} from '../redux/mainReducer'
import React,{useState, useEffect} from 'react'

import axios from 'axios';

function TableBriefCase() {
    const dispatch = useDispatch();

    const newList = useSelector((store)=>store.data.newList)
    const listCoins = useSelector((store)=>store.data.listCoins)
    const resultCase = useSelector((store)=>store.data.resultCase)
 //   const activeCoin = useSelector((state)=>state.data.activeCoin)
 const [main, setMain] = useState([])
 const [list, setList] = useState([])
/*     const [coins, setCoins] = useState([]) */
    const object =[]

useEffect(()=>{

 axios.get('https://api.coincap.io/v2/assets/').then(res=>{
  setMain(res.data.data) 

  setList(listCoins.map(el=>el.activeCoin.id));

  dispatch(newArrayAction({main,list}))


/*   console.log(main) */

  /* listCoins.map(item=>item.activeCoin.id!== main.map(el=>el.id)?object.push('i'):console.log('t')) */
/*    listCoins.map(item=>item.activeCoin.id !== main.map( el=>el.id)?object.push('i'):console.log('t'))  */

/*  */
/*   

  listCoins.map(function(item,index,array){
    main.filter(function(it,ind,arr){
      array[index].id==arr[ind].id?object.push(arr[ind]):0
    })
  })
 */

  /*  main.map((el)=>el.id==listCoins.map(item=>item.activeCoin.id)?object.push(el):'') */


/*   console.log(listCoins) */
/*   console.log(main.filter((el,i)=>el.id==listCoins[i].activeCoin.id)) */

/*   console.log(res.data.data) */
  /* dispatch(newArrayAction(res.data.data)) */
/*   localStorage.setItem('item',JSON.stringify(listCoins))
  setMain(JSON.parse(localStorage.getItem('item')))
  main.map(item=>setCoins(main.push(item.activeCoin.id))) */
/*   console.log(coins) */
/*   setMain(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).data))  */ 
  }) 
 },[main])
 

/* 
 console.log(main) */
    function handleFunc(id){
     dispatch(deleteBriefCaseAction(id))
/*      dispatch(calcTotalValue(resultCase)) */
    } 
   /*  console.log(main.listCoins.map(item=>item.activeCoin.id)) */
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