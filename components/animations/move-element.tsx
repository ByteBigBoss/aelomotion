"use client"
import React, { useState } from 'react'
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface MoveElementProps{
    children: React.ReactNode;
    initial: number;
    animate:number;
    duration:number;
    refresh:boolean;
}

const MoveElement = ({ children, animate, duration, initial, refresh }: MoveElementProps) => {
    const [count, setCount] = useState(0);

    return (
     <Preview SetCount={setCount} isRefreshing={refresh} animeName='Move Element'>
            <motion.div
            key={count}
            initial={{ x: initial }}
            animate={{ x: animate }}
            transition={{ duration: duration}}
        >
            {children}
        </motion.div>
        </Preview>
  )
}

export default MoveElement
