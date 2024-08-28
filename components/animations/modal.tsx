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