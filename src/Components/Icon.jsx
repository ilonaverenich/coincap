import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addCountListAction,removeRepeatsCountListAction,calcCoinPrice,changeStateAddCoin} from '../redux/mainReducer'
import AddedCoinModule from './AddedCoinModule';

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


  return <td className='icon-plus' onClick={()=>handleFunc()}>{state?<img src='https://i.postimg.cc/RFNjK6vK/icons8-add-new-24.png'/>:<img src='https://i.postimg.cc/pdnSd1N8/icons8-24.png'/>}</td>
}

export default Icon