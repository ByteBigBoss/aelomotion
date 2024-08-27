"use client"
import { SidebarContent } from '@/data/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './theme/theme-toggle'

const Sidebar = () => {
    
    const path = usePathname();

    return (
        <div className='flex flex-col w-full '>
            <div className='px-2 mb-4'><ModeToggle/></div>
            {SidebarContent.map((data, key) => (
                <div key={key} className=''>
                    <Link href={data.href} className='w-full text-[16px] line-clamp-2 font-semibold px-4'>{data.name}</Link>
                    <div className='flex flex-col text-[12px] opacity-80 mt-4'>
                        {data.contents.map((data, key) => (
                            <Link key={key} href={data.href} className={`w-full py-3 box-border px-4 hover:bg-black ${path===data.href && 'bg-black'}`}>{data.name}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar
