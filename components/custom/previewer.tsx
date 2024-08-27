"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import { Tabs } from "../ui/tabs";
import { copyToClipboard } from "@/utils/clipboardUtils";
import { Clipboard } from "lucide-react";
import { ConfettiButton } from "../magicui/confetti";
import FadeIn from "../animations/fade-in";
import { BlockText, SubTitle } from "../common/display";


export function Previewer({ preview, code, fragment, title, description }: Readonly<{ preview: React.ReactNode; code: React.ReactNode; fragment: string, title?:string; description?:string; }>) {

    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setCount(count + 1);

        setTimeout(() => {
            setIsLoading(false);
        }, 400); // Timeout duration matches the animation duration
    };
    
    const [response, setResponse] = useState(fragment);

    const handleCopy = async () => {
        try {
            await copyToClipboard(response);
        } catch (err) {
            alert("Failed to copy text to clipboard.");
        }
    };

    const tabs = [
        {
            title: "Preview",
            value: "preview",
            content: (
                <div className="w-full h-full rounded-[24px] border border-[#0000001f] dark:border-[#ffffff1f] bg-white dark:bg-imcrox-secondary-bcolor-dark flex flex-col items-center justify-center">
                    {preview}
                </div>
            ),
        },
        {
            title: "Code",
            value: "code",
            content: (
                <div className="z-[5000] h-full overflow-hidden">
                    <div className="w-full flex flex-col relative items-center mb-[8px] min-h-[160px] h-full rounded-[30px] bg-imcrox-tertiary-bcolor-dark border-imcrox-brcolor-dark border">
                        <div className="w-full z-[4000] flex items-center justify-between bg-imcrox-secondary-bcolor-dark border-b border-imcrox-brcolor-dark box-border px-[24px] h-[40px] rounded-t-[30px]">
                            <span className="text-[12px] text-imcrox-white-64">fade-in.tsx</span>
                            <div onClick={handleCopy} className="flex relative justify-center items-center h-tick-box">
                                <ConfettiButton className="z-[2000]">
                                    <Clipboard width={15} height={15} className="text-imcrox-white-64" />
                                </ConfettiButton>
                                <div className="w-[24px] h-[24px] h-tick absolute rounded-[6px] bg-imcrox-highlight-bcolor-dark"></div>
                            </div>
                        </div>
                        <div className="box-border p-[12px] flex flex-col items-start overflow-y-scroll rounded-[38px] w-full">
                            <div className="bg-transparent w-full text-wrap font-medium text-imcrox-white-64">{code}</div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
     <div className="w-full flex flex-col px-4">
           <div className=""><BlockText title={title} des={description}/></div>
        <div className="h-[10rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start mb-40 mt-8">
            <Tabs tabs={tabs} />
        </div>
     </div>
    );
}