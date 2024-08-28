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
        <div className='flex flex-col w-full '>
            <div className='px-4 mb-4 flex items-center justify-between pb-3'><span className={`${rajdhani.className} font-bold text-[32px] `}>Aelomotion</span><ModeToggle /></div>
            {SidebarContent.map((data, key) => (
                <div key={key} className='text-start '>
                    <Link href={data.href} onClick={() => setId(data.ID)} className={`w-full text-[16px] line-clamp-2 font-medium flex items-center gap-2 px-4 ${data.ID === id ? 'opacity-100' : 'opacity-80'}`}><Boxes size={18} />{data.name}</Link>
                    <div className='flex flex-col text-[12px] opacity-80 mt-4 '>
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
