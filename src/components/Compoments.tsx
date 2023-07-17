import { ReactSVG } from 'react-svg'
import './Components.scss'
import React from 'react'
import { IProjectCardData } from "../resources/projectsData"
import { codeIcon, dcLogo, fmLogo, globeIcon } from "../assets"

type LinkProps = {
    icon?: string,
    content: string,
    to: string
}

export const Link = ({ icon, content, to }: LinkProps) => (
    <a href={to}
        className='l-with-icon'
        target='_blank'
        rel='noreferrer'
    >
        {icon && <ReactSVG src={icon} />}
        {icon && '->'} {content}
    </a>
)

type ButtonProps = {
    icon?: string,
    content: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement | MouseEvent>
}

export const Button = ({ icon, content, onClick }: ButtonProps) => (
    <button className="b-with-icon" onClick={onClick || undefined}>
        {icon && <ReactSVG src={icon} />}
        {icon && '->'} {content}
    </button>
)

type ProjectCardProps = {
    cardData: IProjectCardData
}

export const ProjectCard = ({ cardData }: ProjectCardProps) => {
    const tags = cardData.tags.map((tag: string, index: number) => (
        <span className={tag} key={index}>
            {tag}
        </span>
    ))
    return <article className="project-card-component">
        <img src={cardData.previewImagePath} alt="preview image" />
        <div className="tags-container">
            {tags}
            {cardData?.fmChallenge && <img src={fmLogo} alt='frontendmentor.io logo' />}
            {cardData?.dcChallenge && <img src={dcLogo} alt='devchallenges.io logo' />}
        </div>
        <h2>{cardData.projectName}</h2>
        <div className="links">
            <Link to={cardData.previewUri} content="preview" icon={globeIcon} />
            <Link to={cardData.sourceUrl} content="code" icon={codeIcon} />
        </div>
    </article>
}
