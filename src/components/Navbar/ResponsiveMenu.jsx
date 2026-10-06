import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({
  links,
  showMenu,
  setShowMenu,
}) => (
  <>
    {showMenu && (
      <button
        type="button"
        aria-label="Close navigation"
        className="fixed inset-0 top-[70px] z-10 bg-slate-950/40 md:hidden"
        onClick={() => setShowMenu(false)}
      />
    )}

    <div
      id="mobile-navigation"
      className={`${
        showMenu
          ? "translate-x-0"
          : "-translate-x-full"
      } fixed bottom-0 left-0 top-[70px] z-20 flex w-[82%] max-w-sm flex-col bg-white px-8 py-10 text-slate-900 shadow-2xl transition-transform duration-300 md:hidden`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Explore TravelloGo
      </p>

      <ul className="mt-9 space-y-6 text-2xl font-semibold">
        {links.map((item) => (
          <li key={item.link}>
            <NavLink
              to={item.link}
              onClick={() => {
                setShowMenu(false);
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "hover:text-primary"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
        A responsive travel discovery concept created by Nicolas
        Berrizbeitia.
      </p>
    </div>
  </>
);

export default ResponsiveMenu;
