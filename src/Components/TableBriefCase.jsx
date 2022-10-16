import {useSelector, useDispatch} from 'react-redux'
import {deleteBriefCaseAction} from '../redux/mainReducer'



function TableBriefCase() {
    const dispatch = useDispatch();
    const listCoins = useSelector((store)=>store.data.listCoins)
    const resultCount = useSelector((store)=>store.data.resultCase)

  return (
    <div className='table'>
        <table className='table'>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
            <th></th>
          </tr>
          {listCoins && listCoins.map((item,index)=><tr key={index}>
            <td>{item.activeCoin.name}</td>
            <td>{(+item.activeCoin.priceUsd).toFixed(2)} $</td>
            <td>{item.count}</td>
            <td>
              {(+item.count * (+item.activeCoin.priceUsd).toFixed(2)).toFixed(2)} $</td>
            <td className='delete-row' onClick={()=>dispatch(deleteBriefCaseAction(item.activeCoin.id))}><img src="https://i.postimg.cc/XvHDMLCS/icons8-24.png" title='delete' alt="delete"/></td>
           </tr>
          )}

            
        </table>
          <div className='total'>Итого: <p>{resultCount} $</p></div>
       </div>
  )
}

export default TableBriefCase