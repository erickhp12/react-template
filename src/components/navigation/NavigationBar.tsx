import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' }
];

export const NavigationBar = () => (
  <header className={classes.header}>
    <nav className={classes.nav}>
      <span className={classes.brand}>React Template</span>
      <ul className={classes.list}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? classes.activeLink : classes.link)}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
