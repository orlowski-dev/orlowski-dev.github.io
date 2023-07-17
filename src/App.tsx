import './App.scss'
import { textResources } from './resources/textResources'
import { ProjectsSection } from './modules/ProjectsSection'
import { NavLinks } from './modules/NavLinks'
import { Footer } from './modules/Footer'

export default function App() {
  return (
    <>
      <header className="main-header">
        <p className="brand">@orlowski-dev</p>
        <nav className='main-nav'>
          <div className="command">
            <p>% navLinks</p>
          </div>
          <NavLinks />
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="command">
            <p>% about_me --less</p>
          </div>
          <h1>{textResources.heroH1} &#128075;</h1>
          <h2>{textResources.heroH2}</h2>
          <p>{textResources.heroP}</p>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}