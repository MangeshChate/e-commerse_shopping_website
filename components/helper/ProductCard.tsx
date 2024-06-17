'use client';

import { Product } from '@/typing'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { useToast } from '../ui/use-toast';


type Props = {
    product: Product;
}

const ProductCard = ({ product }: Props) => {

    const num = Math.round(product.rating.rate);
    const rateingArray = new Array(num).fill(0);

    const dispatch = useDispatch();

    // const items = useSelector((state:RootState)=>state.cart.items);
    // console.log(items);
    const {toast} = useToast();

    const addToCartHandler = (product:Product) => {
        toast({
            description:"Item added to Cart",
            variant:"success",
        })
        dispatch(addItem(product));
    }

    return (
        <div className='p-4 shadow-lg rounded-xl  hover:scale-110 transition-all hover:shadow-2xl duration-300'>
            <div className="w-[200px] h-[150px] flex justify-center items-center">
                <Image src={product.image} alt={product.title} width={100} height={100} className='w-[100%] h-[100%] object-contain' />

            </div>
            <p className='mt-5 text-xs capitalize text-gray-600 '>
                {product.category}
            </p>
            <Link href={`/product/product-details/${product.id}`}>
                <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">{product.title}</h1>
            </Link>
            <div className="flex items-center">
                {
                    rateingArray.map((item)=>{
                        return <span key={Math.random()*1000} className="text-yellow-500 text-lg">⭐️</span>
                })
                }
            </div>

            <div className='flex mt-2 items-center space-x-2'>
                <p className='text-black text-base line-through font-semibold opacity-50'>{`$${(product.price +10).toFixed(2)}`}</p>
                <p className='text-black text-base font-bold '>${product.price}</p>
            </div>

            <div className="mt-4 items-center flex space-x-2">
                <Button size={"icon"} onClick={()=>addToCartHandler(product)}>
                    <ShoppingBag size={18}/>
                </Button>
                <Button size={"icon"} className='bg-red-500'>
                    <Heart  size={18}/>
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
