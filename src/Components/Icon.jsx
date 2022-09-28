import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addCountListAction,removeRepeatsCountListAction,calcCoinPrice,changeStateAddCoin} from '../redux/mainReducer'
import AddedCoinModule from './AddedCoinModal';

function Icon(props) {
 const{id,priceUsd} = props; 


  const [state, setState] = useState(true) 
  const [data, setData] = useState('') 
  

 const dispatch = useDispatch()

 const count  = useSelector((store)=>store.data.countPrice)
 const stateAddCoin  = useSelector((store)=>store.data.stateAddCoin)


 function handleFunc(){
  state?dispatch(changeStateAddCoin(true)):dispatch(changeStateAddCoin(false))
  setState(state?false:true)
  setData(priceUsd)
  dispatch(calcCoinPrice())
  state ? dispatch(addCountListAction({id,priceUsd})): dispatch(removeRepeatsCountListAction({id,priceUsd}));

 }


  return <td className='icon-plus' onClick={()=>handleFunc()}>{state?<img width={15} src='https://i.postimg.cc/x1VLv5m3/icons8-24-1.png'/>:<img src='https://i.postimg.cc/pdnSd1N8/icons8-24.png'/>}</td>
}

export default Icon