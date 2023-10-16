import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'


import './components/styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />

        <div className='infos'>
          <h3>Languages</h3>
          <div className='languages-info'>
            <span>EN - B1</span>
            <span>PT-BR - Native Speaker</span> 
          </div>
          <h3>Education</h3>
          <div className='educacional-info'>
            <span></span>
            <span>Software Engineer Bachelors Degree - Universidade Unicesumar</span>
          </div>
          <span></span>
        </div>
        <div className='buttons'>
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
    </main>
  )
}
