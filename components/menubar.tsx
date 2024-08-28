"use client"
import React, { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { SidebarContent } from '@/data/data'
import { ModeToggle } from './theme/theme-toggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Boxes, CornerDownRight, Menu } from "lucide-react";
import { rajdhani } from '@/lib/fonts'
import { ScrollArea } from './ui/scroll-area'

const Menubar = () => {
  const [id, setId] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const path = usePathname();

  const handleItemClick = (dataId:number) => {
    setId(dataId);
    setDrawerOpen(false); // Close the drawer
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <div className='relative flex items-start justify-center z-[10]'><Menu /></div>
      </DrawerTrigger>
      <DrawerContent className="bg-blue-600">
        <DrawerHeader className='flex items-center w-full justify-between'>
          <DrawerTitle className={`${rajdhani.className} font-bold text-[32px]`}>Aelomotion</DrawerTitle>
          <ModeToggle />
        </DrawerHeader>
        <DrawerFooter>
          <ScrollArea className="h-[400px] w-full py-4">
            {SidebarContent.map((data, key) => (
              <div key={key} className='text-start px-4'>
                <Link href={data.href} onClick={() => handleItemClick(data.ID)} className={`w-full text-[16px] line-clamp-2 font-semibold flex items-center gap-2 ${data.ID === id ? 'opacity-100' : 'opacity-80'}`}><Boxes size={18} />{data.name}</Link>
                <div className='flex flex-col text-[12px] opacity-80 mt-4 '>
                  {data.contents.map((data, key) => (
                    <Link key={key} href={data.href} onClick={() => handleItemClick(data.ID)} className={`w-full py-3 box-border px-4 rounded-sm hover:bg-black ${path === data.href && 'bg-black'} flex items-center gap-2`}><CornerDownRight size={18} />{data.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Menubar
