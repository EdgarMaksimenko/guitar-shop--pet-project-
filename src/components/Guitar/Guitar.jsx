import styles from './Guitar.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const Guitar = () =>{
  const dispatch = useDispatch();
  const { id } = useParams();
  const { filteredItems } = useSelector((state) => state.products);
  const guitar = filteredItems.find(el => el.id == id);

  return (
    <div className={styles.guitar}>
      <div className={styles.guitar__item}>
        <img src={guitar.img} alt="" />
        <p>{guitar.category}</p>
        <p>{guitar.name}</p>
        <p>${guitar.price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet iste voluptatibus veritatis? In ea sit eaque illo minima tempora dolorum, eos, officia vel nobis porro similique dolores facilis. Sapiente?</p>
        <button onClick={() => dispatch(addToCart(guitar))}>Add to cart</button>
      </div>
    </div>
  )
};

export default Guitar;