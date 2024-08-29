import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import {  STAGGERING_CHILDREN } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import StaggeredList from "@/components/animations/staggered-list";

const Orchestration = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
      <Title title="Orchestration" caption="Orchestration allows you to control the order and timing of animations. You can sequence animations, delay them, or synchronize them using tools like staggerChildren and delayChildren." />
      <div className="mt-3"><Separator/></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="Staggering Children"
          description="Example of how to use frame motion Orchestration."
          fragment={STAGGERING_CHILDREN}
          fileName="animated-svg.tsx"
          preview={
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
              refresh/>
          }
          code={
           <Editor CODE={STAGGERING_CHILDREN}/>
          }
        />
      </div>
    </div>
  );
};

export default Orchestration
