"use client"
import React, { useEffect, useState } from 'react';
import { Preview } from '../common/display';
import { motion, useAnimation } from "framer-motion";

interface PositionProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;

}

interface ControlProps {
    opacity: number;
    y: number;
}

const PositionAnimation = ({ children, animate, initial }: PositionProps) => {

    const [count, setCount] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: animate.opacity, y: animate.y });
    }, []);

    return (
        <Preview SetCount={setCount} isRefreshing={true} hideIcon animeName='Position Animation'>
            <motion.div key={count} animate={controls} initial={{ opacity: initial.opacity, y: initial.y }}>
                {children}
            </motion.div>
        </Preview>
    );
}

export default PositionAnimation;
