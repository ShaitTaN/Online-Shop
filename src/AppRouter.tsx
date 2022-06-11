import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Main from './pages/Main'

const AppRouter: FC = () => {
	return (
		<Routes>
			 <Route path="/" element={<Main />}/>
			 <Route path="/cart" element={<Cart />}/>
		</Routes>
	)
}

export default AppRouter