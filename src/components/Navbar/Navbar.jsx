import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  NavLink,
  Link,
} from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import {
  HiMenuAlt3,
  HiMenuAlt1,
} from "react-icons/hi";
import { NavbarLinks } from "../../data/navigation";

const navLinkClass = ({ isActive }) =>
  `font-medium transition hover:text-primary ${
    isActive
      ? "text-primary"
      : "text-slate-700"
  }`;

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] =
    useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
      <div className="hidden bg-gradient-to-r from-primary to-secondary text-white sm:block">
        <div className="container flex items-center justify-between py-1 text-xs font-medium tracking-wide">
          <p>
            Curated ideas for more thoughtful trips
          </p>
          <p>Travel discovery prototype</p>
        </div>
      </div>

      <div className="container flex items-center justify-between py-2">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo(0, 0)
          }
          aria-label="TravelloGo home"
        >
          <img
            src={Logo}
            alt="TravelloGo"
            className="h-14 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NavbarLinks.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={navLinkClass}
                onClick={() =>
                  window.scrollTo(0, 0)
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              handleOrderPopup?.()
            }
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Plan a trip
          </button>

          <button
            type="button"
            className="rounded-md p-1 md:hidden"
            onClick={() =>
              setShowMenu(
                (current) => !current
              )
            }
            aria-expanded={showMenu}
            aria-controls="mobile-navigation"
            aria-label={
              showMenu
                ? "Close navigation"
                : "Open navigation"
            }
          >
            {showMenu ? (
              <HiMenuAlt1 size={30} />
            ) : (
              <HiMenuAlt3 size={30} />
            )}
          </button>
        </div>
      </div>

      <ResponsiveMenu
        links={NavbarLinks}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </nav>
  );
};

export default Navbar;
