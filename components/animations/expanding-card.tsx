"use client"
import React, { useEffect, useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    Head: React.ReactNode;
    className?: string;
    beforeTrigger: React.ReactNode;
    afterTrigger: React.ReactNode;
    refresh:boolean;
}

const ExpandingCard = ({ children, className,  Head, beforeTrigger, afterTrigger, refresh }: CardProps) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [count, setCount] = useState(0);


    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='Expanding Card'>
            <motion.div key={count} layout onClick={() => setIsExpanded(!isExpanded)} className={className}>
                <motion.div layout>{Head}</motion.div>
                {isExpanded && <motion.div layout>
                    {children}
                </motion.div>}
                <motion.div layout>
                {isExpanded ? afterTrigger:beforeTrigger}
                </motion.div>
            </motion.div>
        </Preview>
    );
}

export default ExpandingCard;