export const FADE_IN_CODE = `
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

interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
}
export const Preview = ({ children, SetCount, isRefreshing, animeName }: PreviewerProps) => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setCount(count + 1);

        SetCount(count + 1);

        setTimeout(() => {
            setIsLoading(false);
        }, 400); // Timeout duration matches the animation duration
    };
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex-1 flex justify-center items-center">
            {children}
            </div>

            {isRefreshing &&
                <div onClick={handleClick} className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span><RotateCw className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />
                </div>
            }
        </div>
    )
};
`;