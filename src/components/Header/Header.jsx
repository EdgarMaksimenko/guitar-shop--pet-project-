import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import cartImg from '../../static/img/cart.png';
import { isOpened } from '../../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Header = () =>{
  const { cartItemsCounter } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Guitar Shop</h1>
      </div>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active-link': ''}>Shop</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active-link': ''}>About</NavLink>
      </nav>
      <div className={styles.cart} onClick={() => dispatch(isOpened())}>
        <span className={styles.counter}>{cartItemsCounter}</span>
        <img  className={styles.cart} src={cartImg} alt="cart" />
      </div>
    </header>
  )
};

export default Header;