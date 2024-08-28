"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface hoverProps {
    scale: number;
    boxShadow: string;
}

interface tapProps {
    scale: number;
}

interface AnimatedButtonProps {
    children: React.ReactNode;
    hoverVarints: hoverProps;
    tapVariants: tapProps;
    className?:string;
}

const AnimatedButton = ({ children, hoverVarints, tapVariants ,className}: AnimatedButtonProps) => {
    const [count, setCount] = useState(0);

    const buttonVariants = {
        hover: { scale: hoverVarints.scale, boxShadow: hoverVarints.boxShadow },
        tap: { scale: tapVariants.scale }
    };

    return (
        <Preview SetCount={setCount} isRefreshing={true} animeName='AnimatedButton'>
            <motion.button
                key={count}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className={className}
            >
                {children}
            </motion.button>
        </Preview>
    )
}

export default AnimatedButton
