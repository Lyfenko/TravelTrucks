import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import sprite from "../../assets/icons.svg";
import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/campers/selectors";

const buildLinkClass = (hasId, isActive) => {
  return clsx(css.link, isActive && !hasId && css.active);
};

const Navigation = () => {
  const currentCamper = useSelector(selectCurrentCamper);
  const hasId = currentCamper != null;

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navigationContainer}>
          <div className={css.logoNavigationContainer}>
            <NavLink to="/">
              <svg width="136" height="16">
                <use href={`${sprite}#logo`} />
              </svg>
            </NavLink>
          </div>
          <div className={css.textNavigationContainer}>
            <NavLink
              to="/"
              className={({ isActive }) => buildLinkClass(hasId, isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) => buildLinkClass(hasId, isActive)}
            >
              Catalog
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;