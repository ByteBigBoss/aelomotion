"use client"
import { SidebarContent } from '@/data/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ModeToggle } from './theme/theme-toggle'
import { Boxes, CornerDownRight } from "lucide-react";
import { rajdhani } from '@/lib/fonts'
const Sidebar = () => {

    const [id, setId] = useState(0);

    const path = usePathname();

    return (
        <div className='flex flex-col w-full pb-[40px]'>
            <div className='px-4 mb-4 flex items-center justify-between pb-3'><Link href={'/'} className={`${rajdhani.className} font-bold text-[32px] `}>Aelomotion</Link><ModeToggle /></div>
            {SidebarContent.map((data, key) => (
                <div key={key} className='text-start mt-4'>
                    <Link href={data.href} onClick={() => setId(data.ID)} className={`w-full text-[16px] line-clamp-2 font-semibold flex items-center gap-2 px-4 `}><Boxes size={18} />{data.name}</Link>
                    <div className='flex flex-col text-[12px] opacity-80 mt-2 '>
                        {data.contents.map((data, key) => (
                            <Link key={key} href={data.href} onClick={() => setId(data.ID)} className={`w-full py-3 box-border px-4  hover:bg-black ${path === data.href && 'bg-black'} flex items-center gap-2`}><CornerDownRight size={18} />{data.name}</Link>
                        ))}
                    </div>
                </div>
            ))}

            
        </div>
    )
}

export default Sidebar
