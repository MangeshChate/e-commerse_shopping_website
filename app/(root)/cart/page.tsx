'use client'
import Footer from '@/components/home/Footer'
import { RootState } from '@/store/store';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import empty from "@/public/images/empty_cart.svg";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { addItem, CartItem, removeItem } from '@/store/cartSlice';
import { useUser } from '@clerk/nextjs';
const page = () => {
    const dispatch = useDispatch();
    //get our cart Item
    const items = useSelector((state: RootState) => state.cart.items);
    //calculating total quantity
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    //calculate vat
    const vat = (+totalPrice * 0.15).toFixed(2);

    //total price with vat
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

    console.log({
        totalPrice,
        vat,
        totalPriceWithVat
    })


    const addToCartHandler = (item: CartItem) => {
        dispatch(addItem(item));
    }
    const removeCartHandler = (id: number) => {
        dispatch(removeItem({ id }));
    }

    //get authenticate user
    const {user} = useUser();


    return (
        <div className='mt-8 min-h-[60vh]'>
            {items.length == 0 && (
                <div className='flex items-center justify-center h-[60vh] flex-col'>
                    <Image src={empty} alt="empty_cart" width={300} height={300} className='object-cover mx-auto' />
                    <h1 className='text-2xl font-semibold mt-8'>Your cart is empty</h1>
                    <Link href="/" className='mt-4'>
                        <Button className=''>Shop Now</Button>
                    </Link>
                </div>
            )}
            {items.length > 0 && (
                <div className="md:w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
                    <div className='rounded-lg shadow-md xl:col-span-4 overflow-hidden'>
                        <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700'>
                            Your Cart ({totalQuantity} Items)
                        </h1>
                        {items.map((item) => {
                            return <div key={item.id}>
                                <div className="flex pb-6 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-center gap-5" >
                                    <div>
                                        <Image src={item.image} alt={item.title} width={180} height={180} />
                                    </div>
                                    <div>
                                        <h1 className='truncate md:text-xl font-bold text-black'>{item.title}</h1>
                                        <h1 className='md:text-lg text-sm font-semibold'>Category: {item.category}</h1>
                                        <h1 className='md:text-2xl text-lg font-bold text-blue-950'>$ {item.price}</h1>
                                        <h1 className='md:text-lg text-sm font-semibold'>Quantity : {item.quantity}</h1>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <Button className='' variant={"default"} size="sm" onClick={() => addToCartHandler(item)}>Add</Button>
                                            <Button size={"sm"} variant={"destructive"} onClick={() => { removeCartHandler(item.id) }}>Remove</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    

                    <div className='xl:col-span-2'>
                        <div className='bg-indigo-950 sticky top-[25vh] p-6 rounded-lg'>
                            <h1 className='text-center mt-8 mb-8 text-white text-2xl font-semibold'>Summery</h1>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'>
                            </div>
                            <div className="flex mt-4 text-xl justify-between uppercase text-white items-center">
                                <span>SubTotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex mt-6 text-xl justify-between uppercase text-white items-center">
                                <span>VAT</span>
                                <span>${vat}</span>
                            </div>
                            <div className="flex mt-4 text-xl justify-between uppercase text-white items-center">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'>
                            </div>
                            <div className="flex mt-6 text-xl justify-between uppercase text-white items-center">
                                <span>Total</span>
                                <span>${totalPriceWithVat}</span>
                            </div>
                            <div className='w-full mt-6 mb-3 h-[1.2px] bg-white bg-opacity-20'>
                            </div>
                            {!user && (
                                <Link href="/sign-in">
                                    <Button className='bg-orange-500 w-full '>
                                        Sign In to Checkout
                                    </Button>
                                </Link>
                            )}
                            {user && (
                                //paypal button
                                <Link href="/success">
                                <Button className='bg-blue-500'>Paypal (demo button) </Button>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default page
