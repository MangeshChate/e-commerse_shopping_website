import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[60vh] flex justify-center items-center flex-col'>
      <div className='flex flex-col gap-6 items-center'>
        <span className='font-bold text-4xl'>Item Placed Successfully !</span>
        <Link href="/" className='mt-6'>
        <Button className='text-xl' size="lg">Thankyou For Shopping</Button>
        </Link>
      </div>
    </div>
  )
}

export default page
