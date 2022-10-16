import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {stateModalAddAction, activeCoinAction} from '../redux/mainReducer'


function Icon(props) {
  let activeCoin = props.activeCoin;
  const [state, setState] = useState(false) 
  const [data, setData] = useState('') 
  const dispatch = useDispatch()

 function handleFunc(activeCoin){
  dispatch(activeCoinAction(activeCoin))
  setState(true)
  dispatch(stateModalAddAction(true))
 }

  return <td className='icon-plus' onClick={()=>handleFunc(activeCoin)}><img width={15} src='https://i.postimg.cc/vT9tsb6J/icons8-xbox-30.png'/></td>

}

export default Icon