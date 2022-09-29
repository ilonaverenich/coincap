import {useSelector, useDispatch} from 'react-redux'
import {changeStateBriefcase,updateArrayBriefcase} from '../redux/mainReducer';



function Briefcase() {
  const dispatch = useDispatch();

    const case1 = useSelector((store)=>store.data.listCoinState)
    const arrayNewPrice = useSelector((store)=>store.data.arrayNewPrice)
    const activeCoin = useSelector((store)=>store.data.activeCoin)
    console.log(activeCoin)
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
       <div className='table'>
        <table>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
          {case1&& case1.map((el,i)=>
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                 <td>{(+el.priceUsd).toFixed(2)}$</td>
                <td>{(activeCoin[i]).toFixed(0)} </td> 
                <td>{activeCoin[i]*+((+el.priceUsd).toFixed(2))}$</td>
                <td><button onClick={()=>dispatch(updateArrayBriefcase(el))}>X</button></td>
              </tr>
           )}  
        </table>

       </div>
            
           </div>
     <button className='btn modal__content_btn-add' onClick={()=>dispatch(changeStateBriefcase(false))}>{case1.length==0?'К покупкам':'Купить'}</button>
       </div>
     
    </div>
  )
}

export default Briefcase