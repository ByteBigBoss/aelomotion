import Bouncing from '@/components/animations/bouncing'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import { BOUNCING } from '@/data/codes'
import React from 'react'

const Transitions = () => {
  return (
    <div className="con">
    <div className="mt-5 px-4">
    <Title title="Transition Properties" caption="Transitions define how an element changes from one state to another. Framer Motion offers several transition properties, including duration, ease, delay, and repeat." />
    <div className="mt-3"><Separator/></div>
    </div>
    <div className="mt-6">
      <Previewer
        title="Bouncing"
        description="Example of how to use Bouncing animation with frame motion."
        fragment={BOUNCING}
        fileName='bouncing.tsx'
        preview={
          <Bouncing  animate={{start:0, middle:-30, end:0}} transition={{ease:"easeInOut",duration:0.5, repeat: Infinity}}>
            <div className="w-52 h-52 rounded-full from-orange-500 to-yellow-500 bg-gradient-to-t" />
          </Bouncing>
        }
        code={
         <Editor CODE={BOUNCING}/>
        }
      />
    </div>
  </div>
  )
}

export default Transitions
