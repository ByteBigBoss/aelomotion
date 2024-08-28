import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <div className='w-full flex justify-center text-[14px] font-medium  '>
            <Link legacyBehavior href="https://github.com/ByteBigBoss" >
                <a target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2 pb-[40px] opacity-80'>
                    <GitHubLogoIcon width={21} height={21} /><span>ByteBigBoss</span>
                </a>
            </Link>
        </div>

    )
}

export default Footer
