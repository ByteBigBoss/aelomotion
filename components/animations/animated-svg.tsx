"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface SVGProps {
    initialPathLength: number;
    animatePathLength: number;
    duration: number;
    className?: string;
    refresh: boolean;
}

const AnimatedSVG = ({ animatePathLength, duration, initialPathLength, refresh, className }: SVGProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='SVG Path Animation'>

            <motion.svg key={count} width="100" height="100" viewBox="0 0 100 100">
                <motion.path
                    d="M 10 10 H 90 V 90 H 10 Z"
                    className={className?className:'stroke-black'}
                    fill="transparent"
                    strokeWidth="2"
                    initial={{ pathLength: initialPathLength }}
                    animate={{ pathLength: animatePathLength }}
                    transition={{ duration: duration }}
                />
            </motion.svg>
        </Preview>

    )
}

export default AnimatedSVG
