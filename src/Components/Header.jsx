import {useSelector, useDispatch} from 'react-redux';

function Header() {

  const countPrice  = useSelector((store)=>store.data.countPrice)

  return (
    <header>
          <div className='header__block'>
            <div className='header__block-box'>
              <div className='header__block-box_name'>Name</div>
              <div className='header__block-box_price'>Price</div>
            </div>
            <div className='header__block-box'>
              <div className='header__block-box_name'>Name</div>
              <div className='header__block-box_price'>Price</div>
            </div>
            <div className='header__block-box'>
              <div className='header__block-box_name'>Name</div>
              <div className='header__block-box_price'>Price</div>
            </div>
          </div>

          <div className='header__shopping-cart-block'>
            <div className='header__shopping-cart-block_icon'>
              <img src="https://i.postimg.cc/yYN3ZN73/icons8-50.png" alt="icon-shopping-card" />
            </div>
          <div className='header__shopping-cart-block_price'>Итого: <p>{countPrice} $</p> </div>
          </div>
          
        </header>
  )
}

export default Header