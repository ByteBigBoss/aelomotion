"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface FadeInProps{
    children: React.ReactNode;
    initial: number;
    animate:number;
    duration:number;
    refresh:boolean;
}

const FadeIn = ({ children, animate, duration, initial, refresh }:FadeInProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='FadeIn'>
            <motion.div
                key={count}
                initial={{ opacity: initial }}
                animate={{ opacity: animate }}
                transition={{ duration: duration }}
            >
                {children}
            </motion.div>
        </Preview>
    );
};

export default FadeIn;
