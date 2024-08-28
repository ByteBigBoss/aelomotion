import ExpandingCard from '@/components/animations/expanding-card'
import FadeIn from '@/components/animations/fade-in'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import { EXPANDING_CARD } from '@/data/codes'
import React from 'react'

const LayoutProp = () => {
  return (
    <div className="con">
      <div className="mt-5 px-4">
        <Title title="Layout Prop" caption="The layout prop is used to animate layout changes automatically. This is especially useful when an element changes size or position, such as expanding a card on click." />
        <div className="mt-3"><Separator /></div>
      </div>
      <div className="mt-6">
        <Previewer
          title="Expanding Card"
          description="Example of how to use frame motion Keyframes."
          fragment={EXPANDING_CARD}
          fileName='expanding-card.tsx'
          preview={
            <ExpandingCard
              refresh
              className='w-auto h-auto flex flex-col items-start border border-[#0000001f] dark:border-[#ffffff1f] rounded-[20px] box-border p-5'
              Head={
                <FadeIn initial={0} animate={1} duration={1} refresh={false}>
                  <div className="w-52 h-20 rounded-md from-orange-500 to-yellow-500 bg-gradient-to-t" ></div>
                </FadeIn>
              }
              beforeTrigger={
                <div className='mt-3 text-center text-[14px] text-yellow-600 dark:text-yellow-200 cursor-pointer'>View More</div>

              }
              afterTrigger={
                <div className='mt-3 text-center text-[14px] text-emerald-600 dark:text-emerald-200 cursor-pointer'>View Less</div>
              }
            >
              <div className='mt-3'>
                <div className='font-medium'>Card Tilte</div>
                <div className='text-[12px] opacity-80 max-w-80 mobile:max-w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nemo eaque error inventore dolor pariatur quis. Laborum omnis architecto voluptatibus nihil, maxime nemo nisi neque eveniet reprehenderit laboriosam dolor excepturi!</div>
              </div>
            </ExpandingCard>
          }
          code={
            <Editor CODE={EXPANDING_CARD} />
          }
        />
      </div>
    </div>
  )
}

export default LayoutProp
