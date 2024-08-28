import MoveElement from '@/components/animations/move-element'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import { MOVE_ELEMENT } from '@/data/codes'
import React from 'react'

const AnimatedProps = () => {
  return (
    <div className="p-5">
      <div className="mt-5 px-4">
      <Title title="Animated Props" caption="Framer Motion uses the initial, animate, and exit props to control animations. These props define the different states of an animation, from start to finish." />
      <div className="mt-3"><Separator/></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="Moving an Element"
          description="Example of how to Moving an Element with frame motion."
          fragment={MOVE_ELEMENT}
          preview={
           <MoveElement animate={100} initial={-100}  duration={1}>
            <div className='w-52 h-52 rounded-md from-purple-500 to-pink-500 bg-gradient-to-r'></div>
           </MoveElement>
          }
          code={
           <Editor CODE={MOVE_ELEMENT}/>
          }
        />
      </div>
    </div>
  )
}

export default AnimatedProps
