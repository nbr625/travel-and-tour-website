import React from "react";
import { FaUniversalAccess } from "react-icons/fa";
import {
  MdOutlineDevices,
  MdRoute,
} from "react-icons/md";

const notes = [
  {
    title: "Responsive by design",
    text: "Layouts adapt from compact mobile navigation to spacious desktop grids.",
    icon: MdOutlineDevices,
  },
  {
    title: "Resilient navigation",
    text: "Route-based guides remain available after refresh instead of depending on temporary page state.",
    icon: MdRoute,
  },
  {
    title: "Accessible interactions",
    text: "Forms, buttons, dialog behavior, focus styles, and image descriptions support more visitors.",
    icon: FaUniversalAccess,
  },
];

const Location = () => (
  <section
    id="project-notes"
    className="bg-slate-50 py-16"
    data-aos="fade-up"
  >
    <div className="container">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Implementation notes
      </p>

      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
        What this product demonstrates
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {notes.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <Icon
              aria-hidden="true"
              className="h-10 w-10 text-primary"
            />

            <h3 className="mt-4 text-xl font-bold">
              {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Location;
