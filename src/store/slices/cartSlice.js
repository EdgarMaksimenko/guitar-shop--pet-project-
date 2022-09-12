import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartItemsCounter: 0,
  totalPrice: 0,
  opened: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.filter(item => item.id === action.payload.id).length === 0){
        state.cartItems.push({...action.payload, count: 1, total: action.payload.price}); 
      }else{
        const existedProd = state.cartItems.find(item => item.id === action.payload.id);
        existedProd.count += 1;
        existedProd.total = existedProd.price * existedProd.count;
      }
      state.totalPrice = state.cartItems.reduce((acc, current) => {
        return acc + +current.total;
      }, 0);
      state.cartItemsCounter += 1;  
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.totalPrice = state.cartItems.reduce((acc, current) => {
        return acc + +current.total;
      }, 0);
      state.cartItemsCounter = 0;
      state.cartItems.forEach(item => {
        state.cartItemsCounter += item.count;
      });
    },
    isOpened: (state) => {
      state.opened = !state.opened;
      
    }
  },
});

export const { addToCart, removeFromCart, isOpened} = cartSlice.actions;
export default cartSlice.reducer;