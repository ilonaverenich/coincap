import shortenNumRu from '../../shortenNumRu';
import {useSelector} from 'react-redux'

function InfoCoinTable() {

const activeCoin = useSelector((store)=>store.data.activeCoin)

  return (
    <table className='table__info-coin'>
    <tbody>
       <tr>
         <th>Информация</th>
         <th>Данные о валюте</th>
       </tr>
      
       <tr>
         <td>Цена</td>
         <td><b>{(+activeCoin.priceUsd).toFixed(2)} $</b></td>
       </tr>
     
       <tr>
         <td>Доступное предложение для торговли</td>
         
         <td>{shortenNumRu(+(+activeCoin.supply).toFixed(0))} </td>
       </tr>
       <tr>
         <td>Общее кол-во выпущенных активов</td>
       
         <td>{shortenNumRu(+(+activeCoin.maxSupply).toFixed(0))}</td>
       </tr>
       <tr>
         <td>Объем торгов за последние 24 часа</td>
         <td>  {shortenNumRu(+(+activeCoin.volumeUsd24Hr).toFixed(0))} </td>
       </tr>
       
       <tr>
         <td>Средняя цена по объёму за последние 24 часа</td>
         <td>{(+activeCoin.vwap24Hr).toFixed(2)} $</td>
       </tr>
       <tr>
         <td>Процентное изменения цены за последние 24 часа</td>
          <td className={activeCoin.changePercent24Hr[0]=='-'?'red':'green'}>{ ( +activeCoin.changePercent24Hr).toFixed(2)} %</td> 
         
       </tr>
       <tr>
         <td>Сайт</td>
         <td><a target='_blank' href={`${activeCoin.explorer}`}> {activeCoin.explorer}</a></td>
       </tr>

       </tbody>
     </table> 
  )
}

export default InfoCoinTable