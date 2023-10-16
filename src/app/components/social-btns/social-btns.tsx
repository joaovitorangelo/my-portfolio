import { GithubIcon } from "../icons/git.icon";
import { InstaIcon } from "../icons/insta.icon";
import { LinkedinIcon } from "../icons/linkedin.icon";
import { WhatsIcon } from "../icons/whats.icon";


import './social-btns.scss'

export function SocialBtns(){
    return(
        <div className='social'>
            <a href='https://www.instagram.com/joaovitorangelo_/'>
                <InstaIcon />
            </a>
            <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-angelo-da-silva-718173264/'>
                <LinkedinIcon />
            </a>
            <a href='https://github.com/joaovitorangelo'>
                <GithubIcon />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5551994393030'>
                <WhatsIcon />
            </a>
        </div>
    )
}