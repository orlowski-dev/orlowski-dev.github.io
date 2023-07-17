import { frontendMentorIcon, githubIcon, sendIcon } from '../assets'
import { Link } from '../components/Compoments'

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
        <Link
            to='mailto:orlowski.dev@gmail.com'
            content='orlowski.dev@gmail.com'
            icon={sendIcon}
        />
    </div>
)