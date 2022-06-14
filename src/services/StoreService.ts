import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from '../models/IProduct'

export const storeApi = createApi({
	reducerPath: 'storeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com',
	}),
	endpoints: (build) => ({
		getProductsFrom: build.query<IProduct[], string>({
			query: (category: string) => ({
				url: `/products/category/${category}`
			})
		})
	})
})