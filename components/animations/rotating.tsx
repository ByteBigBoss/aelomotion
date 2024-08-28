"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface transitionProps{
    repeat: number;
    duration: number;
}

interface RotateProps{
    children: React.ReactNode;
    rotate: number[];
    transition:transitionProps;
    refresh:boolean;
}

const Rotating = ({ children, rotate,transition, refresh }:RotateProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='Rotating'>
           <motion.div
           key={count}
            animate={{ rotate: rotate}}
            transition={{duration: transition.duration, repeat: transition.repeat}}
        >
            {children}
        </motion.div>
        </Preview>
    );
};

export default Rotating;
