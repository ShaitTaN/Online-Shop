import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const Main = () => {
	return (
		<div className='container mx-auto mt-5 flex flex-col items-center'>
			<h3 className='text-3xl'>Большая распродажа</h3>
			<h2 className='text-5xl font-bold'>Скидки до 90%</h2>
			<Carousel/>
		</div>
	)
}

export default Main