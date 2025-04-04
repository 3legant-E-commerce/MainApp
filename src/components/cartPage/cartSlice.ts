import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  shopId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cart.find(
        (item) => item.shopId === action.payload.shopId
      );

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    },

    // Delete an item from the cart
    deleteItem(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.shopId !== action.payload);
    },

    // Increase the quantity of an item
    increaseItemQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item.shopId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    // Decrease the quantity of an item
    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item.shopId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        // If the quantity reaches 0, remove the item from the cart
        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.shopId !== action.payload
          );
        }
      }
    },

    // Clear the entire cart
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selector to get the entire cart
export const getCart = (state: { cart: CartState }): CartItem[] =>
  state.cart.cart;

// Selector to get the total quantity of items in the cart
export const getTotalCartQuantity = (state: { cart: CartState }): number =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// Selector to get the total price of items in the cart
export const getTotalCartPrice = (state: { cart: CartState }): number =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// Selector to get the quantity of a specific item by its ID
export const getCurrentQuantityById =
  (id: string) =>
  (state: { cart: CartState }): number =>
    state.cart.cart.find((item) => item.shopId === id)?.quantity ?? 0;
