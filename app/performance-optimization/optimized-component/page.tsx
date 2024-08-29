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
      <div className="mt-3"><Separator/></div>
      </div>
      <div className="mt-6">
        <Previewer
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
           <Editor CODE={OPTIMIZED_COMPONENT}/>
          }
        />
      </div>
    </div>
  );
};

export default PerformanceOptimization
