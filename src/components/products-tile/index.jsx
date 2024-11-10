import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { addtocart, removefromthecart } from '../../store/slices/cardslice'

export default function ProductTile({ product }) {

    const dispatch = useDispatch()
    const  {cart}  = useSelector(state=>state)

    function addtocard() {
        dispatch(addtocart(product))
    }

    function removefromthecard(){
      dispatch(removefromthecart(product.id))
        
    }

    return (
        <div className='group flex flex-col  items-center border-2  border-red-400 gap-3 p-4 h-[360px] mr-10 ml-10 mt-10 rounded-xl'>
            <div className='h-[150px]  mt-8'>
                <img
                    src={product?.images}
                    alt={product?.title}
                    className='object-cover w-full h-full'
                />
            </div>
            <div>
                <h1 className='w-40 text-gray-500 font-bold mt-3 truncate text-lg'>{product?.title}</h1>
            </div>
            <div className='flex items-center justify-center mt-3  w-full'>
                <button onClick={ cart.some(item => item.id === product.id)? removefromthecard : addtocard} className='bg-red-500 text-white border-2  hover:bg-orange-400 rounded-lg font-bold p-2'>
                    {

                        cart.some(item => item.id === product.id) ? "Remove from cart" : " Add to the card"

                    }
                </button>
            </div>
        </div>
    )
}

