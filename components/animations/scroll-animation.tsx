"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Preview } from '../common/display';

interface ScrollProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;
    threshold?: number;

}

interface ControlProps {
    opacity: number;
    y: number;
}

const ScrollAnimation = ({ children, animate, initial, threshold = 0.5 }: ScrollProps) => {
    const [count, setCount] = useState(0);

    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: animate.opacity, y: animate.y });
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls, animate, threshold]);

    return (
        <Preview SetCount={setCount} isRefreshing={true} hideIcon animeName='Scroll Animation'>
            <motion.div
                key={count}
                ref={ref}
                animate={controls}
                initial={{ opacity: initial.opacity, y: initial.y }}
            >
                {children}
            </motion.div>
        </Preview>
    );
};

export default ScrollAnimation;
