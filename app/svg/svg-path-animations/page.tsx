import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import {  SVG_PATH_ANIMATION } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import AnimatedSVG from "@/components/animations/animated-svg";

const SVGAnimations = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
      <Title title="SVG Animations" caption="Framer Motion can also animate SVGs, providing a way to add motion to vector graphics." />
      <div className="mt-3"><Separator/></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="SVG Path Animation"
          description="Example of how to use SVG Path Animation with frame motion."
          fragment={SVG_PATH_ANIMATION}
          fileName="animated-svg.tsx"
          preview={
           <AnimatedSVG animatePathLength={1} initialPathLength={0} duration={2} refresh className="stroke-black dark:stroke-white"/>
          }
          code={
           <Editor CODE={SVG_PATH_ANIMATION}/>
          }
        />
      </div>
    </div>
  );
};

export default SVGAnimations
