import { ProjectCard } from "../components/Compoments"
import { IProjectCardData, projectCardData } from "../resources/projectsData"

export const ProjectsSection = () => {
  const cards = projectCardData.map((card: IProjectCardData, index: number) => (
    <ProjectCard cardData={card} key={index} />
  ))
  return (
    <section className="projects-section">
      <div className="command">
        <p>% project_list</p>
      </div>
      <header>
        <h2>My projects</h2>
      </header>
      <div className="cards-container">
        {cards}
      </div>
    </section>
  )
}