import { IProduct } from '../../models/IProduct';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	products: [] as IProduct[],
	index: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			const index = state.products.findIndex(item => item.id === action.payload.id)
			state.index = index
			index > -1 ? state.products.splice(index, 0, action.payload) : state.products.push(action.payload)
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state.products.splice(state.products.findIndex(item => item.id === action.payload), 1)
		},
		removeAllFromCart(state, action: PayloadAction<number>) {
			state.products = state.products.filter(item => item.id !== action.payload)
		},
		payForProducts(state) {
			state.products = []
		}
	}
})
