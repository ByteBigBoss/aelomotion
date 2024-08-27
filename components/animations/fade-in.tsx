"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

const FadeIn = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={true} animeName='FadeIn'>
            <motion.div
                key={count}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </Preview>
    );
};

export default FadeIn;
