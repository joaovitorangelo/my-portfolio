import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info(){
    return(
        <div className='infos'>
            <SectionTitle text='Languages' />
        <div className='languages-info'>
            <span>EN - B1</span>
            <span>PT-BR - Native Speaker</span> 
        </div>
            <SectionTitle text='Education' />
        <div className='educacional-info'>
            <span>🎓</span>
            <span>Software Engineer Bachelors Degree - Universidade Unicesumar</span>
        </div>
      </div>
    )
}