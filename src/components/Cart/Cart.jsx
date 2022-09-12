import styles from './Cart.module.css';
import deleteBtn from '../../static/img/close-btn.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const {cartItems, totalPrice, opened} = useSelector((state) => state.cart);

  return (
    <div className={opened ? styles.cart + ' ' + styles.active : styles.cart} >
      <div className={styles.cart__title}>
        <p>{cartItems.length !== 0 ? 'Cart' : 'Cart is empty'}</p>
      </div>

      <div className={styles.cart__items}>
        {cartItems && cartItems.map((item, index) => (
          <div key={index} className={styles.cart__item}>
            <div className={styles.cart__item__img}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.cart__item__info}>
              <p>Name : {item.name}</p>
              <p>Amount : {item.count}</p>
              <p>Unit price : ${item.price}</p>
            </div>
            <img src={deleteBtn} onClick={() => dispatch(removeFromCart(item.id))} className={styles.delete}></img>
          </div>
        ))}
      </div>
      {
        cartItems.length !== 0 && (
          <div className={styles.confirm}>
            <p>Total : ${totalPrice}</p>
            <button>BUY</button>
          </div>
        )
      }
      
    </div>
  )
};

export default Cart;