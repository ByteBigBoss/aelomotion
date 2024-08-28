import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import {  POSITION } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import PositionAnimation from "@/components/animations/position-animation";

const Position = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
        <Title title="useAnimation Hook" caption="The useAnimation hook allows you to create and control animations programmatically, offering more flexibility than the standard motion components." />
        <div className="mt-3"><Separator /></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="Position Animation"
          description="Example of how to use Position animation with frame motion."
          fragment={POSITION}
          fileName="fade-in.tsx"
          preview={
            <PositionAnimation animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 500 }}>
              <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
            </PositionAnimation>
          }
          code={
            <Editor CODE={POSITION} />
          }
        />
      </div>
    </div>
  );
};

export default Position
