import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: []
};


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket:(state, action) =>{
      state.items = [...state.items, action.payload]
    },
    removeBasket:(state, action) =>{
      const copyOfBasket = [...state.items];
      const index = state.items.findIndex((item)=> item.id === action.payload.id);
      if(index !== -1){ // si index no es -1 quiere decir que si hay un id el cual eliminar
        copyOfBasket.splice(index, 1);
        state.items = copyOfBasket;
      }else{
        alert('There isnt products')
      }
    }
  },
});

export const {addBasket, removeBasket} = basketSlice.actions;


export const itemsInBasket = (state) => state.basket.items.length;
export const arrayInBasket = (state) => state.basket.items;
export const amountInBasket = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0);


export default basketSlice.reducer;
