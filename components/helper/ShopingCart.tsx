'use client'
import { RootState } from '@/store/store'
import { ShoppingBag, ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import CartSidebar from './CartSidebar'

const ShopingCart = () => {

  const items = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = items.reduce((total, item) =>
    total + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger>

        <div className='relative'>
          <span className='absolute -top-3 -right-2 text-xs flex items-center justify-center  bg-red-500 rounded-full text-center text-white w-6 h-6'>{totalQuantity}</span>
          <ShoppingBagIcon cursor="pointer" size={26} />
        </div>
      </SheetTrigger>
      <SheetContent className='overflow-auto h-full w-[800px]' >
        
        {/* CadrtSidebar */}
        <CartSidebar items={items} />

      </SheetContent>
    </Sheet>
  )
}

export default ShopingCart
