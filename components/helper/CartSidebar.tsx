import { addItem, CartItem, removeItem } from '@/store/cartSlice'

import React from 'react'
import empty from "@/public/images/empty_cart.svg";
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SheetClose } from '../ui/sheet';
import { useDispatch } from 'react-redux';
type Props ={ 
    items:CartItem[]
}

const CartSidebar = ({items}:Props) => {
    const dispatch = useDispatch();
    const addToCartHandler = (item:CartItem) =>{
        dispatch(addItem(item));
    }
    const removeCartHandler = (id:number) =>{
        dispatch(removeItem({id}));
    }
  return (
    <div className='mt-6 h-full mb-6 '>
        <h1 className='text-center font-bold text-lg mb-6'>Your Cart</h1>
        {items.length==0 && (
            <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
                    <Image className='object-cover mx-auto' src={empty} alt="empty_cart" width={200} height={200} />
                    <span className='mt-6 font-semibold text-2xl'>Your cart empty</span>
            </div>
        )}
        {items.length>0 && (
            <div>
               { items.map((item)=>{
                    return <div key={item.id} className='pb-4 border-gray-300 border-opacity-60  border-b p-4'>
                        <div>
                            <Image src={item.image} alt={item.title} width={60} height={60} className='object-cover mb-4' />
                        </div>
                        <div>
                            <h1 className='text-sm w-[4/5 font-semibold truncate'>{item.title}</h1>
                            <h1 className='text-base text-blue-950 font-bold'>${(item?.price*item.quantity).toFixed(2)}</h1>
                            <h1 className='text-base font-bold mb-2'>Quantity : {item?.quantity}</h1>
                            <div className="flex items-center space-x-4">
                                    <Button className='' variant={"default"} size="sm" onClick={()=>addToCartHandler(item)}>Add</Button>
                                    <Button size={"sm"} variant={"destructive"}onClick={()=>{removeCartHandler(item.id)}}>Remove</Button>
    
                            </div>
                        </div>
                       
                    </div>
                })}
               <Link href="/cart">
                <SheetClose className='w-full'>

                <Button variant={"default"} size={"lg"} className="w-full mt-5 mb-5">View All Cart</Button>
                </SheetClose>
               </Link>
                

            </div>

        )}

    </div>
  )
}

export default CartSidebar
