import Modal from '@/components/animations/modal'
import Rotating from '@/components/animations/rotating'
import { Title } from '@/components/common/display'
import Editor from '@/components/custom/code'
import { Previewer } from '@/components/custom/previewer'
import { Separator } from '@/components/ui/separator'
import { MODAL } from '@/data/codes'
import React from 'react'

const AnimatePresence = () => {

    return (
        <div className="con">
            <div className="mt-5 px-4">
                <Title title="AnimatePresence" caption="AnimatePresence is a component that enables animations when elements enter or leave the React tree. This is particularly useful for animating elements like modals or notifications." />
                <div className="mt-3"><Separator /></div>
            </div>
            <div className="mt-6">
                <Previewer
                    title="Fading in and out a Modal"
                    description="Example of how to use frame motion AnimatePresence."
                    fragment={MODAL}
                    fileName='model.tsx'
                    preview={
                        <div className='w-full h-full relative flex flex-col items-center'>
                            <Modal refresh initial={0} animate={1} exit={0} isVisible={true}>
                                <div className="w-52 h-52 rounded-md from-black to-zinc-600 text-white bg-gradient-to-t" >
                                    <Rotating refresh rotate={[0, 90, 180, 270, 360]} transition={{duration:2, repeat:Infinity}}>
                                        <div className='w-20 h-20 rounded-xl from-red-500 via-orange-500 to-yellow-500 bg-gradient-to-tr'></div>
                                    </Rotating>
                                </div>
                            </Modal>
                        </div>
                    }
                    code={
                        <Editor CODE={MODAL} />
                    }
                />
            </div>
        </div>
    )
}

export default AnimatePresence
