import { Header } from './components/header/header'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
        <Header/>
        <div className="experience">
          <h3>Experiências</h3>
          <p>oi</p>
          <div className="experience-time">

          </div>
          <div className="infos">
            <h3>Linguas</h3>
            <div className="Languagens-info">
              <span>PT-BR - Idioma  Nativo</span>
            </div>
            <h3>Educação</h3>
            <div className="educational-info">
              <span>🎓</span>
              <span>Análise e Desenvolvimento de Sistemas - Centro Universitário Internacional Uninter; Mecatrônica - Centro de Formação Profissional Serviço Nacionanal de Aprendizagem Industrial Carlos Tannhauser</span>
            </div>
          </div> 
          <div className="buttons">
            <div className="social">

            </div>
            <button>Contate-me</button>
          </div>
        </div>
    </main>
  )
}