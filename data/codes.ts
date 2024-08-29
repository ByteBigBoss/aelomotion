export const FADE_IN_CODE = `
import FadeIn from "@/components/animations/fade-in";
import React from 'react'

const MotionComponents = () => {
  return (
    <div className="p-5">
   
        <FadeIn initial={0} animate={1} duration={1} refresh>
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
    refresh:boolean;
}

const FadeIn = ({ children, animate, duration, initial, refresh }:FadeInProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='FadeIn'>
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
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
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
   
        <MoveElement refresh animate={100} initial={-100}  duration={1}>
            <div className='w-52 h-52 mobile:w-24 mobile:h-24 rounded-md from-purple-500 to-pink-500 bg-gradient-to-r'></div>
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
    refresh:boolean;
}

const MoveElement = ({ children, animate, duration, initial, refresh }: MoveElementProps) => {
    const [count, setCount] = useState(0);

    return (
     <Preview SetCount={setCount} isRefreshing={refresh} animeName='Move Element'>
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
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
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
   
        <Bouncing refresh animate={{start:0, middle:-30, end:0}} transition={{ease:"easeInOut",duration:0.5, repeat: Infinity}}>
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
    refresh:boolean;
}

const Bouncing = ({children,animate,transition, refresh}:BouncingProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='Bouncing'>
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
   
        <AnimatedButton refresh className='px-6 py-3 rounded-md bg-black dark:bg-orange-500' hoverVarints={{scale:1.2, boxShadow: "0px 2px 8px rgb(0,0,0,0.2)"}} tapVariants={{scale: 0.9}}>
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
    refresh:boolean;
}

const AnimatedButton = ({ children, hoverVarints, tapVariants ,className, refresh}: AnimatedButtonProps) => {
    const [count, setCount] = useState(0);

    const buttonVariants = {
        hover: { scale: hoverVarints.scale, boxShadow: hoverVarints.boxShadow },
        tap: { scale: tapVariants.scale }
    };

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='AnimatedButton'>
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
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
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
   
        <Rotating refresh rotate={[0,90, 180, 270, 360]} transition={{duration:2,repeat:Infinity}}>
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
    refresh:boolean;
}

const Rotating = ({ children, rotate,transition, refresh }:RotateProps) => {
    const [count, setCount] = useState(0);

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='Rotating'>
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

export const MODAL = `
import Modal from '@/components/animations/modal'
import React from 'react'

const AnimatePresence = () => {
  return (
    <div className="p-5">
   
        <div className='w-full h-full relative flex flex-col items-center'>
            <Modal refresh initial={0} animate={1} exit={0} isVisible={true}>
                <div className="w-52 h-52 rounded-md from-black to-zinc-600 text-white bg-gradient-to-t" >
                    <Rotating refresh rotate={[0, 90, 180, 270, 360]} transition={{duration:2, repeat:Infinity}}>
                        <div className='w-20 h-20 rounded-xl from-red-500 via-orange-500 to-yellow-500 bg-gradient-to-tr'></div>
                    </Rotating>
                </div>
            </Modal>
        </div>
        
    </div>
  )
}

export default AnimatePresence


"use client"
import { AnimatePresence, motion } from "framer-motion";
import { Preview } from "../common/display";
import {  useState } from "react";
import { Button } from "../ui/button";

interface ModalProps {
    children: React.ReactNode;
    initial: number;
    animate: number;
    exit: number;
    isVisible: boolean;
    refresh:boolean;
}

const Modal = ({ children, animate, exit, initial, refresh }: ModalProps) => {
    const [count, setCount] = useState(0);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev)=>!prev);
    }

    return (
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='Model'>
            <AnimatePresence key={count}>
                {open && (
                    <motion.div
                        initial={{ opacity: initial }}
                        animate={{ opacity: animate }}
                        exit={{ opacity: exit }}
                    >
                        {children}
                    </motion.div>
                )}
                <Button onClick={handleOpen} className='absolute bottom-[40px] hover:text-white dark:hover:text-black text-black bg-white drop-shadow-md'>{open?"Close":"Open"}</Button>
            </AnimatePresence>
        </Preview>
    );
}

export default Modal;


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const EXPANDING_CARD = `
import Modal from '@/components/animations/modal'
import React from 'react'

const LayoutProp = () => {
  return (
    <div className="p-5">
   
        <ExpandingCard
            refresh
            className='w-auto h-auto flex flex-col items-start border border-[#0000001f] dark:border-[#ffffff1f] rounded-[20px] box-border p-5'
            Head={
                <FadeIn initial={0} animate={1} duration={1} refresh={false}>
                  <div className="w-52 h-20 rounded-md from-orange-500 to-yellow-500 bg-gradient-to-t" ></div>
                </FadeIn>
            }
            beforeTrigger={
                <div className='mt-3 text-center text-[14px] text-yellow-600 dark:text-yellow-200 cursor-pointer'>View More</div>

            }
            afterTrigger={
                <div className='mt-3 text-center text-[14px] text-emerald-600 dark:text-emerald-200 cursor-pointer'>View Less</div>
            }
            >
              <div className='mt-3'>
                <div className='font-medium'>Card Tilte</div>
                <div className='text-[12px] opacity-80 max-w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nemo eaque error inventore dolor pariatur quis. Laborum omnis architecto voluptatibus nihil, maxime nemo nisi neque eveniet reprehenderit laboriosam dolor excepturi!</div>
              </div>
        </ExpandingCard>
        
    </div>
  )
}

export default LayoutProp


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
        <Preview SetCount={setCount} isRefreshing={refresh} animeName='FadeIn'>
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


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const POSITION = `
import Modal from '@/components/animations/modal'
import React from 'react'

const Position = () => {
  return (
    <div className="p-5">
   
        <PositionAnimation animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 500 }}>
          <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
        </PositionAnimation>
        
    </div>
  )
}

export default Position


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


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const SCROLL = `
import Modal from '@/components/animations/modal'
import React from 'react'

const Scroll = () => {
  return (
    <div className="p-5">
   
        <ScrollAnimation

          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          threshold={0.5} // Animation triggers when 50% of the element is in view
        >
          <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
        </ScrollAnimation>
        
    </div>
  )
}

export default Scroll


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


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const TWO_WAY_SCROLL = `
import Modal from '@/components/animations/modal'
import React from 'react'

const Scroll = () => {
  return (
    <div className="p-5">
   
        <TwoWayScrollAnimation
          animate={{ opacity: 1, y: 0 }}  // Animation when scrolling down
          reverse={{ opacity: 0, y: 50 }} // Reverse animation when scrolling up
          initial={{ opacity: 0, y: 50 }}   // Initial state
          threshold={0.5}  // Trigger when 50% of the element is in view
        >
          <div className="w-52 h-52 rounded-full from-purple-500 to-pink-500 bg-gradient-to-t" />
        </TwoWayScrollAnimation>
        
    </div>
  )
}

export default Scroll


"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Preview } from '../common/display';

interface ScrollProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;
    reverse: ControlProps;
    threshold?: number;
}

interface ControlProps {
    opacity: number;
    y: number;
}

const TwoWayScrollAnimation = ({ children, animate, initial, reverse, threshold = 0.5 }: ScrollProps) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (scrollDirection === 'down') {
                        controls.start({ opacity: animate.opacity, y: animate.y });
                    } else {
                        controls.start({ opacity: reverse.opacity, y: reverse.y });
                    }
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
    }, [controls, animate, reverse, threshold, scrollDirection]);

    return (
        <Preview SetCount={setCount} isRefreshing={true} hideIcon animeName='Two Way Scroll Animation'>
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

export default TwoWayScrollAnimation;


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const SVG_PATH_ANIMATION = `
import AnimatedSVG from "@/components/animations/animated-svg";
import React from 'react'

const SVGAnimations = () => {
  return (
    <div className="p-5">
   
        <AnimatedSVG animatePathLength={1} initialPathLength={0} duration={2} refresh className="stroke-black dark:stroke-white"/>

    </div>
  )
}

export default SVGAnimations


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

export default AnimatedSVG;


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const STAGGERING_CHILDREN = `
import StaggeredList from "@/components/animations/staggered-list";
import React from 'react'

const Orchestration = () => {
  return (
    <div className="p-5">
   
        <StaggeredList containerVariants={{transition:{staggerChildren:0.5}}} itemVariants={{hidden:{opacity:0, y:-60}, visible:{opacity:1, y:0}}} 
            items={[
                {
                  item:
                  <div>
                      <div className="w-60 h-20 rounded-xl from-orange-500 to-yellow-500 bg-gradient-to-t" />
                  </div>
                },
                {
                  item:
                  <div>
                      <div className="w-60 h-20 rounded-xl from-purple-500 to-pink-500 bg-gradient-to-t" />
                  </div>
                },
                {
                  item:
                  <div>
                      <div className="w-60 h-20 rounded-xl from-emerald-500 to-lime-500 bg-gradient-to-t" />
                  </div>
                },
                {
                  item:
                  <div>
                      <div className="w-60 h-20 rounded-xl from-cyan-500 to-blue-500 bg-gradient-to-t" />
                  </div>
                }
              ]} 
            refresh
        />
    </div>
  )
}

export default Orchestration


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


interface PreviewerProps {
    children: React.ReactNode;
    SetCount: (count: number) => void;
    isRefreshing: boolean;
    animeName:string
    hideIcon?: boolean;
}
export const Preview = ({ children, SetCount, isRefreshing, animeName, hideIcon=false }: PreviewerProps) => {
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
                <div  className="h-[50px] w-full px-6 rounded-b-[24px] flex justify-between">
                    <span>{animeName}</span>{!hideIcon && <RotateCw onClick={handleClick} className={isLoading ? 'animate-spin duration-200' : 'animate-none'} />}
                </div>
            }
        </div>
    )
};
`;

export const OPTIMIZED_COMPONENT = `
import StaggeredList from "@/components/animations/staggered-list";
import React from 'react'

const Orchestration = () => {
  return (
    <div className="p-5">
   
        <OptimizedComponent >
          <div className="w-52 h-52 animate-spin rounded-[20px] from-orange-500 to-yellow-500 bg-gradient-to-t" />
        </OptimizedComponent>

    </div>
  )
}

export default Orchestration


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

export default OptimizedComponent;
`;