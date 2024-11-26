"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
  

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <div className='flex-between fixed h-16 w-full border-b-4 border-purple-100 bg-white p-5 lg:hidden'>
        <Link href={'/'} className='flex items-center justify-center gap-2 md:py-2'>
            <Image 
                src={'/assets/images/logo-text.svg'}
                alt='logo'
                width={128}
                height={32}
            />
        </Link>

        <nav className='flex gap-2'>
        <SignedIn>
            <UserButton />
        
            <Sheet>
                <SheetTrigger className='px-2'>
                    <Image 
                        src='/assets/icons/menu.svg'
                        alt='menu'
                        width={32}
                        height={32}
                        className='cursor-pointer'
                    />
                </SheetTrigger>

                <SheetContent className='sheet-content sm:w-64'>
                    <>
                        <Image 
                            src={'/assets/images/logo-text.svg'}
                            alt='logo'
                            width={152}
                            height={23}
                        />

                        <ul className='header-nav elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname
                            return(
                                <li key={link.route} className={` ${isActive ? 'gradient-text' : 'text-gray-700'} py-2 flex whitespace-nowrap text-dark-700`}>
                                    <Link key={link.label} href={link.route} className='p-16-semibold flex size-full gap-4 p-4 cursor-pointer'>
                                    <Image 
                                        src={link.icon}
                                        alt={link.label}
                                        width={24}
                                        height={24}

                                    />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>


                    </>
                </SheetContent>
            </Sheet>

            </SignedIn>

            <SignedOut>
                    <Button asChild className='py-4 px-6 flex-center gap-3 rounded-full p-16-semibold focus-visible:ring-offset-0 focus-visible:ring-transparent bg-purple-gradient bg-cover'>
                        <Link
                            href={'/sign-up'}>
                                Sign Up
                        </Link>
                    </Button>
                </SignedOut>
        </nav> 
    </div>
  )
}

export default MobileNav