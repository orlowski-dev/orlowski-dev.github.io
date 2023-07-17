import { frontendMentorIcon, githubIcon, sendIcon } from '../assets'
import { Button, Link } from '../components/Compoments'

export const NavLinks = () => (
    <div className="nav-links">
        <Link
            to='https://github.com/orlowski-dev'
            content='github'
            icon={githubIcon}
        />
        <Link
            to='https://www.frontendmentor.io/profile/orlowski-dev'
            content='frontend_mentor'
            icon={frontendMentorIcon}
        />
        <Button
            content='contact'
            icon={sendIcon}
        />
    </div>
)