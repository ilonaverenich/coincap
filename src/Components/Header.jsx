import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {changeStateBriefcase} from '../redux/mainReducer'

function Header() {

  const countPrice  = useSelector((store)=>store.data.countPrice)
  const coin = useSelector((store)=>store.data.coin[0])
  const dispatch = useDispatch()


  return (
    <header> 
    
          <div className='header__block'>
           <div className='header__block-title'>
          
          <p>Популярные криптовалюты: </p>
           
           </div>
          <div className='header__block-content'>
              <div className='header__block-box'>
                  <div className='header__block-box_name'><b>{coin && coin[0] && coin[0].name}</b></div>
                  <div className='header__block-box_price'>{coin && coin[0] && (+coin[0].priceUsd).toFixed(2)}$</div>
                </div>
                <div className='header__block-box'>
                  <div className='header__block-box_name'><b>{coin && coin[1] && coin[1].name}</b></div>
                  <div className='header__block-box_price'>{coin && coin[1] && (+coin[1].priceUsd).toFixed(2)}$</div>
                </div>
                <div className='header__block-box'>
                  <div className='header__block-box_name'><b>{coin && coin[2] && coin[2].name}</b></div>
                  <div className='header__block-box_price'>{coin && coin[2] && (+coin[2].priceUsd).toFixed(2)}$</div>
                </div>
            </div>
          </div>

          <div className='header__shopping-cart-block'>
            <div className='header__shopping-cart-block_icon'>
              <img onClick={()=>dispatch(changeStateBriefcase(true))} src="https://i.postimg.cc/yYN3ZN73/icons8-50.png" className='img-briefcase' alt="icon-shopping-card" />
            </div>
          <div className='header__shopping-cart-block_price'>Итого: <p>{/* {countPrice.toFixed(2)}  */}$</p> </div>
          </div>
          
        </header>
  )
}

export default Header