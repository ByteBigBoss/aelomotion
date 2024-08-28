import AnimatedButton from '@/components/animations/animated-button'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import { ANIMATED_BUTTON } from '@/data/codes'
import React from 'react'

const Variants = () => {
  return (
    <div className="con">
    <div className="mt-5 px-4">
    <Title title="Variants" caption="Variants allow you to define multiple states for an element and easily switch between them. This is useful for managing complex animations that involve multiple interactive states." />
    <div className="mt-3"><Separator/></div>
    </div>
    <div className="mt-6">
      <Previewer
        title="Button with Hover and Tap Effects"
        description="Example of how to use frame motion variants."
        fragment={ANIMATED_BUTTON}
        fileName='animated-button.tsx'
        preview={
         <AnimatedButton refresh className='px-6 py-3 rounded-md bg-black dark:bg-orange-500' hoverVarints={{scale:1.2, boxShadow: "0px 2px 8px rgb(0,0,0,0.2)"}} tapVariants={{scale: 0.9}}>
            <span className='text-white'>Click Me</span>
         </AnimatedButton>
        }
        code={
         <Editor CODE={ANIMATED_BUTTON}/>
        }
      />
    </div>
  </div>
  )
}

export default Variants
