"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface StaggeredListProps {
    containerVariants: containerProps;
    itemVariants: itemProps;
    items: childs[];
    refresh: boolean;
    className?:string;
}

interface transitionProps { staggerChildren: number; }
interface containerProps {
    transition: transitionProps;
}

interface childs {
    item: React.ReactNode;
}

interface variants {
    opacity: number;
    y: number;
}
interface itemProps {
    hidden: variants;
    visible: variants;
}

const StaggeredList = ({ containerVariants, itemVariants, refresh, items ,className }: StaggeredListProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='StaggeredList'>
            <motion.ul key={count} variants={containerVariants} initial="hidden" animate="visible" className={className}>
                {items.map((data, key) => (
                    <motion.li key={key} variants={itemVariants}>{data.item}</motion.li>
                ))}
            </motion.ul>
        </Preview>

    )
}

export default StaggeredList
