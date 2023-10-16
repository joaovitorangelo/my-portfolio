import Image from 'next/image'
import { SectionTitle } from '../sectionTitle/section-title'

import './experience.scss'

export function Experience() {
    return(
        <div className='experience'>
            <SectionTitle text='Experience' />
            <p>My experience is limited, but I am a dedicated enthusiast. For each day, a new challenge. I am constantly seeking to stay ahead, learning from my mistakes, and evolving from them. My constant goal is to create applications with responsiveness and modernity, not to mention pure creativity.</p>
            <div className='experience-time'>
                <div className='experience-language'>
                    <Image
                    src='/js.png'
                    alt='JavaScript Logo'
                    width={40}
                    height={40}
                    priority
                />

                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>Basic</span>
                    </div>
                </div>
                </div>

                <div className='experience-language'>
                    <Image 
                    src='/ts.png'
                    alt='TypeScript Logo'
                    width={40}
                    height={40}
                    priority
                />

                <div className="experience-unit">
                    <div className="experience-measure measure-2">
                        <span>Basic</span>
                    </div>
                </div>
                </div>

                <div className='experience-language'>
                    <Image 
                    src='/react.png'
                    alt='React Logo'
                    width={40}
                    height={40}
                    priority
                />

                <div className="experience-unit">
                    <div className="experience-measure measure-3">
                        <span>Basic</span>
                    </div>
                </div>
                </div>
            </div>
      </div>
    )
}