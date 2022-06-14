import { IProduct } from '../../models/IProduct';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	products: [] as IProduct[]
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.products.push(action.payload)
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state.products.splice(state.products.findIndex(item => item.id === action.payload), 1)
		},
		removeAllFromCart(state, action: PayloadAction<number>) {
			state.products = state.products.filter(item => item.id !== action.payload)
		}
	}
})
