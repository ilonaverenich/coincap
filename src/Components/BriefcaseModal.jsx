import {useSelector, useDispatch} from 'react-redux'
import {changeStateBriefcase} from '../redux/mainReducer'


function Briefcase() {
  const dispatch = useDispatch();

    const case1 = useSelector((store)=>store.data.listCoinState)
    console.log(case1)
  return (
    <div className='modal'>
       <div className='modal__title-block'>
         <div className='modal__title-block_close'>
          <img src="https://i.postimg.cc/GtZzT2TC/icons8-24.png" title='close' alt="close" onClick={()=>dispatch(changeStateBriefcase(false))}  />
            </div>
            <div className='modal__title-block_buy'>
              Портфель 
  
           </div>
           <div>
            <p>{case1.length==0? 'Выбранных монет нет! ':'Выбранные монеты:'}</p>
       
            {case1&& case1.map((el,i)=>
              <div>
                <p>{i+1}. {el.name} - {(+el.priceUsd).toFixed(2)} $ </p> 
              </div>
           )}
           </div>
     <button className='btn modal__content_btn-add' onClick={()=>dispatch(changeStateBriefcase(false))}>{case1.length==0?'К покупкам':'Купить'}</button>
       </div>
     
    </div>
  )
}

export default Briefcase