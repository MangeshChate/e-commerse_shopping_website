'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast';
import { addItem, CartItem } from '@/store/cartSlice';
import { Product } from '@/typing';
import React from 'react'
import { useDispatch } from 'react-redux';



const AddCart = ({product}:{product:Product}) => {
  const {toast} = useToast();
 const dispatch = useDispatch();
  const addToCartHandler = () => {
      toast({
          description:"Item added to Cart",
          variant:"success",
      })
      dispatch(addItem(product));
  }

  return (
    <Button className='mt-6 ' onClick={()=>addToCartHandler()}>
        Add to Cart
    </Button>
  )
}

export default AddCart
