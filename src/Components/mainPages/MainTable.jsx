import {useDispatch} from 'react-redux'
import shortenNumRu from '../../shortenNumRu'
import {useState, useEffect } from 'react';
import Pagination from './Pagination';
import {useNavigate } from "react-router-dom";
import TableLoader from './TableLoader';
import Name from './Name'; 
import Icon from './Icon';
import axios from 'axios';
import {activeCoinAction,coinListAction,costArrayAction} from '../../redux/mainReducer'


function MainTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const [coins, setCoins] = useState([])


    useEffect(()=>{
        axios.get('https://api.coincap.io/v2/assets').then(res=>{
          dispatch(coinListAction(res.data.data))
          setCoins(res.data.data);
          dispatch(costArrayAction())

        })
       },[]) 


   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex- postPerPage;
   const currentPosts = coins.slice(firstPostIndex,lastPostIndex) 

 

   function handleFunc(item){
    dispatch(activeCoinAction(item))
    navigate('/info')    
    }
    
  return (
    <div>
        {currentPosts.length==0?<TableLoader/>:''}
        <table className='main-table'>
    <tbody>
         {currentPosts && <tr>
        <th>№</th>
        <th></th>
        <th>Name</th>
        <th>VWAP (24Hr)</th>
        <th>Change (24Hr)</th>
        <th>Market Cap</th>
        <th>Price</th>
        <th></th>
      </tr>} 
      { currentPosts && currentPosts.map(item=>
          <tr key={item.id} > 
          <td className='table-rank'>{item.rank}</td>
          <td className='table-symbol'><b>{item.symbol}</b></td>
          <td className='table-name' onClick={()=>handleFunc(item)}> 
          <Name name={item.name}/></td>
          <td>{(+item.vwap24Hr).toFixed(2)} $</td>
          <td className={item.changePercent24Hr[0]=='-'?'red':'green'}>{(+item.changePercent24Hr).toFixed(2)} $</td>
          <td>{shortenNumRu(+(+item.marketCapUsd).toFixed(0))} $</td>
          <td><b>{(+item.priceUsd).toFixed(2)}$</b></td>
          <Icon activeCoin={item} postPerPage={postPerPage}/>
      </tr>
      )}
       </tbody>
    </table>
    <Pagination totalPost={coins.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default MainTable