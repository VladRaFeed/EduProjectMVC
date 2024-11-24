import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <nav className={css.nav_bar}>
        <ul className={css.nav_list}>
          <li>
            <NavLink to="/" className={css.nav_link}>
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={css.nav_link}>
              Курси
            </NavLink>
          </li>
          <li>
            <NavLink to="/marks" className={css.nav_link}>
              Журнал Оцінок
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
