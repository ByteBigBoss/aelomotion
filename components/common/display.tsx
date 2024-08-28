"use client"
import { RotateCw } from "lucide-react";
import { useState } from "react";


type TitleProps = {
    title: string;
    caption?:string;
}

type SubTitleProps = {
    subtitle: string;
}

export const SubTitle = ({ subtitle }: SubTitleProps) => {
    return (
        <div className="text-[1.25rem] mobile:text-[1rem] font-semibold w-full py-2 box-border px-4 bg-blue-950 text-white rounded-md">{subtitle}</div>
    )
};

export const Title = ({ title, caption }: TitleProps) => {
    return (
        <div className='text-[4rem] font-bold title'>
            <div>{title}</div>
            <div className="text-[1rem] opacity-90 font-normal w-10/12 caption">{caption}</div>
        </div>
    )
};

interface BlockTextProps{
    title?:string;
    des?:string;
}

export const BlockText = ({title,des}:BlockTextProps)=>{
    return (
        <div>
            <div className="text-[2rem] mobile:text-[1.5rem] mid:text-[1.5rem] font-bold">{title}</div>
            <div>
                <p className="opacity-80 mobile:text-[15px]">{des}</p>
            </div>
        </div>
    )
};

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
