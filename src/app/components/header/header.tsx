import Image from 'next/image'

import './header.scss'

export function Header(){
    return(
        <div className='header'>
            <div>
                <h1>Hi, I'm João! 👋</h1>
                <h2>Software Engineering</h2>
            </div>

            <Image
                src='/avatar.jpg'
                alt='Perfil Logo'
                width={325}
                height={310}
                priority
            />
        </div>
    )
} 