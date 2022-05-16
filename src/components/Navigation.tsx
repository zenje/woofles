import { NavLink } from 'react-router-dom';
import { NavigationLink } from '../types';

type Props = {
  links: NavigationLink[];
};

const Navigation = ({ links }: Props) => {
  return (
    <nav>
      {links.map((link) => (
        <div
          className="spectrum-Body spectrum-Body--sizeXXL navigation-link"
          key={link.label}
        >
          <NavLink
            className={({ isActive }) => (isActive ? 'disabled' : '')}
            to={link.to}
          >
            {link.label}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
