import React from 'react';
import styles from './Products.module.css';
import {NavLink} from 'react-router-dom';
import ThreeDots from '../ContentLoader/ContentLoader'
import { getProducts } from '../../store/slices/productsSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Products = () =>{
  const { filteredItems, isLoading } = useSelector((state) => state.products);
  const { cartItemsCounter } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  },[]);
  
  return (
    <div className={styles.products}>
        {!isLoading 
        ? filteredItems.map(item => (
          <div className={styles.products__item} key={item.id}>
            <NavLink to={`/guitar/${item.id}`} >
              <img src={item.img} alt="product-img" />
              <p>{item.category}</p>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </NavLink>
            <div className={styles.footer}>
              <button>Show more</button>
              <button disabled={cartItemsCounter > 49}
                      onClick={() => dispatch(addToCart(item))}>Add to cart</button>
            </div>
          </div>
          ))
        : (
          <>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
            <div className={styles.products__item}>
              <ThreeDots/>
            </div>
          </>
          )
        }
    </div>
  )
};

export default Products;