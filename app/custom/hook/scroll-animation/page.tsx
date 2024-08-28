import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import {  SCROLL } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import ScrollAnimation from "@/components/animations/scroll-animation";

const Scroll = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
        <Title title="Intersection Observer" caption="You'll use the Intersection Observer API to observe when the element is in the viewport and trigger the animation based on that." />
        <div className="mt-3"><Separator /></div>
      </div>
      <div className="mt-6">
        <Previewer
        className="mb-32 pt-8"
          title="Scroll Animation"
          description="Example of how to use Scroll animation with frame motion."
          fragment={SCROLL}
          fileName="fade-in.tsx"
          preview={
            <ScrollAnimation

              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              threshold={0.5} // Animation triggers when 50% of the element is in view
            >
              <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
            </ScrollAnimation>

          }
          code={
            <Editor CODE={SCROLL} />
          }
        />
      </div>
    </div>
  );
};

export default Scroll
