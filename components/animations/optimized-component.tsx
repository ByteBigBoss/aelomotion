"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface OptimizedProps {
    children: React.ReactNode;
    className?: string;
}
const OptimizedComponent = ({ children, className }: OptimizedProps) => {

    return (
        <motion.div style={{ willChange: "transform" }} className={className}>
            {children}
        </motion.div>
    )
}

export default OptimizedComponent
