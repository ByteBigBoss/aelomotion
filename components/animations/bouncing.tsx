"use client"
import React, { useState } from 'react'
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface transitionProps{
    ease: "anticipate" | "backIn" | "backInOut" | "backOut" | "circIn" | "circInOut" | "circOut" | "easeIn" | "easeInOut" | "easeOut" | "linear";
    repeat: number;
    duration: number;
}

interface animateProps{
    start:number;
    middle:number
    end:number;
}

interface BouncingProps{
    children: React.ReactNode;
    animate: animateProps;
    transition: transitionProps;
}

const Bouncing = ({children,animate,transition}:BouncingProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={true} animeName='Bouncing'>
            <motion.div
            key={count}
            animate={{ y: [animate.start, animate.middle, animate.end] }}
            transition={{ ease: transition.ease, repeat: transition.repeat, duration: transition.duration }}
        >
            {children}
        </motion.div>
        </Preview>
    );
}

export default Bouncing
