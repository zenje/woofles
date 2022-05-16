import { NavLink } from 'react-router-dom';
import { NavigationLink } from '../types';

type Props = {
  links: NavigationLink[];
};

const Navigation = ({ links }: Props) => {
  return (
    <nav>
      {links.map((link) => (
        <div className="spectrum-Body spectrum-Body--sizeXXL navigation-link">
          <NavLink
            className={({ isActive }) => (isActive ? 'disabled' : '')}
            key={link.label}
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
