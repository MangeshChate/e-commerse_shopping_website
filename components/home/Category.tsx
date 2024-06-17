import { getAllCategory } from '@/Request/requests'
import React from 'react'
import { Card } from '../ui/card';

const Category = async() => {
    const categories:string[] = await getAllCategory();
    
  return (
    <div className='pt-16 pb-12'>
      <h1 className='text-center font-bold text-2xl capitalize'>Shop by category</h1>
      {/* Define grid */}
      <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((category, index) => (
            <Card key={category} className='text-center flex justify-center items-center cursor-pointer p-12 rounded-xl text-2xl font-bold shadow-lg hover:bg-slate-200 hover:scale-110 transition-all duration-300'>
                    <h1 className='text-sm sm:text-base md:text-lg lg:text-2xl'>
                        {category}
                    </h1>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default Category
