import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const productsUrl = 'https://631b45f6dc236c0b1ef2336f.mockapi.io/products';

const initialState = {
  productsItems: [],
  filteredItems: [],
  isLoading: true,
};

export const getProducts = createAsyncThunk('products/getProducts', () => {
  return fetch(productsUrl)
  .then(res => res.json())
  .catch(err => console.warn(err));
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      if (action.payload){
        state.filteredItems = state.productsItems.filter(item => item.category === action.payload);
      }else{
        state.filteredItems = state.productsItems;
      }
    }
  },
  extraReducers: {
    [getProducts.pending]:(state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]:(state, action) => {
      state.productsItems = action.payload;
      state.filteredItems = action.payload;
      state.isLoading = false;
    },
    [getProducts.rejected]:(state) => {
      console.warn('REJECTED');
    },
  }
});

export const { filterItems} = productsSlice.actions;
export default productsSlice.reducer;