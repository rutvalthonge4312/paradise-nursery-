import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, image, quantity}
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // {id,name,price,image}
      const existing = state.items.find((x) => x.id === item.id);

      state.totalQuantity += 1;
      state.totalAmount += item.price;

      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existing.quantity += 1;
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((x) => x.id === id);
      if (!existing) return;

      existing.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += existing.price;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((x) => x.id === id);
      if (!existing) return;

      existing.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalAmount -= existing.price;

      if (existing.quantity <= 0) {
        state.items = state.items.filter((x) => x.id !== id);
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((x) => x.id === id);
      if (!existing) return;

      state.totalQuantity -= existing.quantity;
      state.totalAmount -= existing.quantity * existing.price;
      state.items = state.items.filter((x) => x.id !== id);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
``
