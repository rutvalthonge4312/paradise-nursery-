import { createSlice } from "@reduxjs/toolkit";
import ItemsInCart from "./interfaces/itemsInCart";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as ItemsInCart[],
  },
  reducers: {
    addToCart: (state, action) => {
      const {name, image, description, cost} = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if(existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({name, image, description, cost, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if(existingItem) {
        existingItem.quantity = quantity;
      }
    },
    increaseItemQuantity: (state, action) => {
      const {name} = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if(existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const {name} = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if(existingItem) {
        if(existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.name !== name);
        } else {
          existingItem.quantity--;
        }
      }
    }
  },
})
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseItemQuantity,
  decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer