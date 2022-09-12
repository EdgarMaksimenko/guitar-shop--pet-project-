import styles from './ShopPage.module.css';
import React from 'react';
import Products from '../../components/Products/Products';
import Filter from '../../components/Filter/Filter';


const ShopPage = () =>{
  return (
    <div className={styles.shop__page}>
      <Filter/>
      <Products/>
    </div>
  )
};

export default ShopPage;