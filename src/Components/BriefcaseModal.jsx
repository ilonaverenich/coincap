import {useSelector, useDispatch} from 'react-redux'
import TableBriefCase from './TableBriefCase';
import {stateModalBriefCaseAction} from '../redux/mainReducer'



function Briefcase() {
  const dispatch = useDispatch();
  const resultCase = useSelector((state)=>state.data.resultCase)
  const listCoins = useSelector((state)=>state.data.listCoins)
console.log(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).data))
    function handleFunc(){
   /*    localStorage.setItem('listCoins',JSON.stringify({listCoins}));
      localStorage.setItem('active',JSON.stringify({resultCase})); */
    }

  return (
    <div className='modal'>
       <div className='modal__title-block'>
         <div className='modal__title-block_close'>
          <img src="https://i.postimg.cc/vBb8Gvj3/icons8-48.png" width={30} title='close' alt="close"  onClick={()=>dispatch(stateModalBriefCaseAction(false))}  />
            </div>
            <div className='modal__title-block_buy'>
              Портфель 
           </div>  
            <TableBriefCase/> 
            <div>
            </div>
       
          <div>
               <button className='btn modal__content_btn-add' onClick={()=>handleFunc()}>Купить</button>
          </div>
            </div>
                
    </div>
  )
}

export default Briefcase