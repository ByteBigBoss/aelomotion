import Rotating from '@/components/animations/rotating'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import {  ROTATING } from '@/data/codes'
import React from 'react'

const Keyframes = () => {
  return (
    <div className="con">
    <div className="mt-5 px-4">
    <Title title="Keyframes" caption="Keyframes allow you to create animations that pass through a series of values over time. This is useful for more complex animations, such as rotating an element." />
    <div className="mt-3"><Separator/></div>
    </div>
    <div className="mt-6">
      <Previewer
        title="Rotating an Element"
        description="Example of how to use frame motion Keyframes."
        fragment={ROTATING}
        fileName='rotating.tsx'
        preview={
         <Rotating refresh rotate={[0,90, 180, 270, 360]} transition={{duration:2,repeat:Infinity}}>
            <div className="w-52 h-52 rounded-[24px] from-rose-500 via-pink-500 to-purple-500 bg-gradient-to-t" />
         </Rotating>
        }
        code={
         <Editor CODE={ROTATING}/>
        }
      />
    </div>
  </div>
  )
}

export default Keyframes
