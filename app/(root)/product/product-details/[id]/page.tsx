import { getProductByCategory, getSingleProduct } from '@/Request/requests';
import { Product } from '@/typing';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import AddCart from './add-cart';
import ProductCard from '@/components/helper/ProductCard';
import Footer from '@/components/home/Footer';

const ProductDetails = async({params}:{params:{id:string}}) => {
    const id = params.id;
   const singleProduct:Product = await getSingleProduct(id);
    const relatedProduct:Product[] = await getProductByCategory(singleProduct.category);

    const num = Math.round(singleProduct?.rating.rate);
     const stringArray = new Array(num).fill(0);

  return (
    <div className='mt-20'>
      {/* define a grid  system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* image */}
        <div className='col-span-3 mb-6 lg:mb-0'>
            <Image src={singleProduct.image} alt={singleProduct.title} width={400} height={400}/>
        </div>
        {/* Content */}
        <div className='col-span-4'>
            <h1 className="lg:text-3xl text-2xl font-bold text-black">
                {singleProduct.title}
            </h1>
            <div className="mt-2 flex items-center space-x-2">
                <div className='flex items-center '>
                    {stringArray.map((star)=>{
                        return <Star key={Math.random()*5000} fill={"yellow"} size={20} className='text-yellow-500' />
                    })}
                </div>
                <p>({singleProduct?.rating.count})</p>
            </div>
            <span className='w-1/4 h-[1.6px] bg-gray-500 rounded-lg block mt-4 opacity-20 mb-4'></span>
            <h1 className='lg:text-6xl text-3xl  md:text-4xl text-blue-950 font-bold'>$ {singleProduct?.price.toFixed(2)}</h1>
            <p className='mt-4 text-base text-black opacity-60'>{singleProduct?.description}</p>
            <p className='mt-4 text-sm opacity-70 text-black font-bold'>Category : {singleProduct?.category}</p>
            <p className='mt-2 text-sm opacity-70 text-black font-bold'>Tag : Shop,WDW</p>
            <p className='mt-2 text-sm opacity-70 text-black font-bold'>SKU : {Math.random()*500}</p>
            {/* Addcart */}
            <AddCart product={singleProduct}/>
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto ">
        <h1 className='text-2xl text-black font-semibold '>Related Product</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {relatedProduct.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetails
