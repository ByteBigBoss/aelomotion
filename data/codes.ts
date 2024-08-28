export const FADE_IN_CODE = `
import FadeIn from "@/components/animations/fade-in";
import React from 'react'

const MotionComponents = () => {
  return (
    <div className="p-5">
   
        <FadeIn initial={0} animate={1} duration={1}>
            <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
        </FadeIn>
        
  
    </div>
  )
}

export default MotionComponents


"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface FadeInProps{
    children: React.ReactNode;
    initial: number;
    animate:number;
    duration:number;
}

const FadeIn = ({ children, animate, duration, initial }:FadeInProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={true} animeName='FadeIn'>
            <motion.div
                key={count}
                initial={{ opacity: initial }}
                animate={{ opacity: animate }}
                transition={{ duration: duration }}
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


export const MOVE_ELEMENT = `
import MoveElement from '@/components/animations/move-element'
import React from 'react'

const AnimatedProps = () => {
  return (
    <div className="p-5">
   
        <MoveElement animate={100} initial={-100}  duration={1}>
            <div className='w-52 h-52 rounded-md from-purple-500 to-pink-500 bg-gradient-to-r'></div>
        </MoveElement>
        
  
    </div>
  )
}

export default AnimatedProps


"use client"
import React, { useState } from 'react'
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface MoveElementProps{
    children: React.ReactNode;
    initial: number;
    animate:number;
    duration:number;
}

const MoveElement = ({ children, animate, duration, initial }: MoveElementProps) => {
    const [count, setCount] = useState(0);

    return (
     <Preview SetCount={setCount} isRefreshing={true} animeName='Move Element'>
            <motion.div
            key={count}
            initial={{ x: initial }}
            animate={{ x: animate }}
            transition={{ duration: duration}}
        >
            {children}
        </motion.div>
        </Preview>
  )
}

export default MoveElement

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

export const BOUNCING = `
import Bouncing from '@/components/animations/bouncing'
import React from 'react'

const Transitions = () => {
  return (
    <div className="p-5">
   
        <Bouncing  animate={{start:0, middle:-30, end:0}} transition={{ease:"easeInOut",duration:0.5, repeat: Infinity}}>
            <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
        </Bouncing>
        
  
    </div>
  )
}

export default Transitions


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


export const ANIMATED_BUTTON = `
import AnimatedButton from '@/components/animations/animated-button'
import React from 'react'

const Variants = () => {
  return (
    <div className="p-5">
   
        <AnimatedButton className='px-6 py-3 rounded-md bg-black dark:bg-orange-500' hoverVarints={{scale:1.2, boxShadow: "0px 2px 8px rgb(0,0,0,0.2)"}} tapVariants={{scale: 0.9}}>
            <span className='text-white'>Click Me</span>
        </AnimatedButton>
        
  
    </div>
  )
}

export default Variants


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

export const ROTATING = `
import Rotating from '@/components/animations/rotating'
import React from 'react'

const Keyframes = () => {
  return (
    <div className="p-5">
   
        <Rotating rotate={[0,90, 180, 270, 360]} transition={{duration:2,repeat:Infinity}}>
            <div className="w-52 h-52 rounded-[24px] from-rose-500 via-pink-500 to-purple-500 bg-gradient-to-t" />
        </Rotating>
        
  
    </div>
  )
}

export default Keyframes


"use client"
import React, { useState } from 'react';
import { Preview } from '../common/display';
import { motion } from "framer-motion";

interface transitionProps{
    repeat: number;
    duration: number;
}

interface RotateProps{
    children: React.ReactNode;
    rotate: number[];
    transition:transitionProps;
}

const Rotating = ({ children, rotate,transition  }:RotateProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={true} animeName='Rotating'>
           <motion.div
           key={count}
            animate={{ rotate: rotate}}
            transition={{duration: transition.duration, repeat: transition.repeat}}
        >
            {children}
        </motion.div>
        </Preview>
    );
};

export default Rotating;


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