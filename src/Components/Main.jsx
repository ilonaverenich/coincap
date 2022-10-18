import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Icon from './Icon';
import AddedCoinModule from './AddedCoinModal';
import {useNavigate } from "react-router-dom";
import Name from './Name';
import Briefcase from './BriefcaseModal';
import {coinListAction, activeCoinAction} from '../redux/mainReducer'
import Pagination from './Pagination';
import shortenNumRu from '../shortenNumRu'
import TableLoader from './TableLoader';

function Main() {

  const [coins, setCoins] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  const stateList = useSelector((state)=>state.data.stateModalAdd)
  const stateModalBriefCase = useSelector((state)=>state.data.stateModalBriefCase)
  const navigate = useNavigate();
  const dispatch = useDispatch();

    function handleFunc(item){
    dispatch(activeCoinAction(item))
    navigate('/info')   
    }

    
   useEffect(()=>{
    axios.get('https://api.coincap.io/v2/assets').then(res=>{
      dispatch(coinListAction(res.data.data))
      setCoins(res.data.data);

    })
   },[])


   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex- postPerPage;
   const currentPosts = coins.slice(firstPostIndex,lastPostIndex)


  return (
    <div className='main'>
             {stateModalBriefCase?<Briefcase/>:''}
             {stateList? <AddedCoinModule />:''}
             <section className={stateList || stateModalBriefCase? 'content transpatent fixed':'content'}> 
             {currentPosts.length==0?<TableLoader/>:''}
          <div className='content__table '>
            <table className='main-table'>
            <tbody>
              <tr>
                <th>№</th>
                <th></th>
                <th>Name</th>
                <th>VWAP (24Hr)</th>
                <th>Change (24Hr)</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th></th>
              </tr>
             
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
    </section>
    </div>
     
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