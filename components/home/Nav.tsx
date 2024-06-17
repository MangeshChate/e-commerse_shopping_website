import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShopingCart from '../helper/ShopingCart'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
    return (
        <div className='h-[12vh] sticky top-0 bg-white shadow-lg '>
            <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
                {/* logo */}
                <Link href={"/"} className='flex items-center'>
                    <Image
                        src="/images/logo.svg.png"
                        alt="logo"
                        width={80}
                        height={80} 
                    />
                    <div className='flex flex-col font-bold text-xl'>
                        <span>Nasa</span>
                        <span>Shop</span>
                    </div>
                </Link>
                {/* itms  */}
                <div className='flex items-center space-x-6'>
                    {/* Search Box */}
                    <SearchBox/>
                    <HeartIcon className='' size={26} cursor={"pointer"}/>
                    {/* Shopping Cart */}
                    <ShopingCart/>
                    {/* User Button */}

                    {/* sign in */}
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>

                    {/* not sign in */}
                    <SignedOut>
                        <SignInButton>
                            <UserIcon size={26} cursor={"pointer"}/>
                        </SignInButton>
                    </SignedOut>

                    
                </div>
            </div>
        </div>
    )
}

export default Nav
