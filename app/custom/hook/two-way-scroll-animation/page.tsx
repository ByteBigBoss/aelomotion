import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import {  TWO_WAY_SCROLL } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import TwoWayScrollAnimation from '@/components/animations/two-way-scroll-animation';

const TwoWayScroll = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
        <Title title="Observer + Direction" caption="You’ll need to track the scroll direction to determine whether the user is scrolling down or up. Based on the scroll direction, you can trigger the appropriate animation." />
        <div className="mt-3"><Separator /></div>
      </div>
      <div className="mt-6">
      <Previewer
          title="Two Way Scroll Animation"
          description="Example of how to use Two Way Scroll animation with frame motion."
          fragment={TWO_WAY_SCROLL}
          fileName="two-way-scroll-animation.tsx"
          preview={
            <TwoWayScrollAnimation
              animate={{ opacity: 1, y: 0 }}  // Animation when scrolling down
              reverse={{ opacity: 0, y: 50 }} // Reverse animation when scrolling up
              initial={{ opacity: 0, y: 50 }}   // Initial state
              threshold={0.5}  // Trigger when 50% of the element is in view
            >
              <div className="w-52 h-52 rounded-full from-purple-500 to-pink-500 bg-gradient-to-t" />
            </TwoWayScrollAnimation>


          }
          code={
            <Editor CODE={TWO_WAY_SCROLL} />
          }
        />
      </div>
    </div>
  );
};

export default TwoWayScroll
