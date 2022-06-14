import { IProduct } from './../../models/IProduct';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IProduct[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.push(action.payload)
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state = state.filter(item => item.id !== action.payload)
		}
	}
})

export const {} = cartSlice