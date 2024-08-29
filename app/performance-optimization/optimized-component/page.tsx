import React from "react";
import { Title } from "@/components/common/display";
import { Previewer } from "@/components/custom/previewer";
import { OPTIMIZED_COMPONENT } from "@/data/codes";
import Editor from "@/components/custom/code";
import { Separator } from "@/components/ui/separator";
import OptimizedComponent from "@/components/animations/optimized-component";

const PerformanceOptimization = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
        <Title title="Performance Optimization" caption="Optimizing animations is crucial for maintaining smooth and responsive user interfaces. Framer Motion provides several performance optimizations, such as using the will-change property to optimize CSS transitions." />

        <div className="mt-3"><Separator /></div>
      </div>
      <div className="mt-6">
        <Previewer
          className="pt-8 pb-20"
          title="Optimized Component"
          description="Example of how to use Optimized Component."
          fragment={OPTIMIZED_COMPONENT}
          fileName="fade-in.tsx"
          preview={
            <OptimizedComponent >
              <div className="w-52 h-52 animate-spin rounded-[20px] from-orange-500 to-yellow-500 bg-gradient-to-t" />
            </OptimizedComponent>
          }
          code={
            <Editor CODE={OPTIMIZED_COMPONENT} />
          }
        />
      </div>
      <div className="mt-3 px-4"><Separator /></div>

      <div className="flex flex-col items-start mt-8 px-4 gap-4 pb-[40px]">
        <div className="text-[2rem] font-bold">Why Use will-change?</div>
        <div>
          <div className="text-[1.25rem] font-bold">Performance Optimization</div>
          <span className="opacity-80">By using will-change, the browser knows in advance which properties are going to change and can prepare by creating a separate layer for that element, reducing the chances of layout shifts and rendering issues.</span>
        </div>
        <div>
          <div className="text-[1.25rem] font-bold">Less Jank</div>
          <span className="opacity-80">Especially important for animations that might cause the browser to re-render or reflow elements on the page, reducing visual glitches during the animation.</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimization
