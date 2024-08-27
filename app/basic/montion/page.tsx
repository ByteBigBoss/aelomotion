import React from "react";
import FadeIn from "@/components/animations/fade-in";
import { SubTitle, Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import { FADE_IN_CODE } from "@/data/codes";
import Code from "@/components/custom/code";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";

const MotionComponents = () => {
  return (
    <div className="p-5">
      <div className="mt-5 px-4">
      <Title title="Motion Components" caption="Motion components are the core building blocks of Framer Motion. These components (motion.div, motion.span, etc.) are enhanced versions of standard HTML elements that can be animated." />
      <div className="mt-3"><Separator/></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="Fade In"
          description="Example of how to use FadeIn animation with frame motion."
          fragment={FADE_IN_CODE}
          preview={
            <FadeIn>
              <div className="w-52 h-52 rounded-full bg-red-300" />
            </FadeIn>
          }
          code={
           <Editor CODE={FADE_IN_CODE}/>
          }
        />
      </div>
    </div>
  );
};

export default MotionComponents;
