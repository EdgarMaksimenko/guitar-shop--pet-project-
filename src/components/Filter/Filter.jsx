import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../store/slices/productsSlice';

const Filter = () =>{
  const dispatch = useDispatch();
  
  return (
    <div className={styles.filter__bar}>
      <p className={styles.filter__title}>Filter</p>
      <div className={styles.filter__buttons}>
        <button onClick={() => dispatch(filterItems())}>All</button>
        <button onClick={() => dispatch(filterItems('classic'))}>Classic</button>
        <button onClick={() => dispatch(filterItems('electro'))}>Electro</button>
        <button onClick={() => dispatch(filterItems('bass'))}>Bass</button>
      </div>
    </div>
  )
};

export default Filter;