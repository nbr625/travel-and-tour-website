import React from "react";
import Location from "../components/Location/Location";

const About = () => (
  <main className="bg-white pb-16 pt-24 text-slate-900">
    <section
      className="container py-12"
      data-aos="fade-up"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        About the project
      </p>

      <h1 className="mt-2 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
        A travel discovery concept built around clarity and useful
        choices
      </h1>

      <div className="mt-8 grid gap-8 text-lg leading-8 text-slate-600 lg:grid-cols-2">
        <p>
          TravelloGo is a portfolio product concept for exploring
          destinations, comparing sample itineraries, and starting a
          trip inquiry. The experience replaces information overload
          with a focused path from inspiration to action.
        </p>

        <p>
          The interface uses reusable React components, responsive
          layouts, route-based content, controlled form state,
          filtering, accessible labels, and motion that supports the
          page hierarchy. Its content is illustrative, and no
          bookings or payments are processed.
        </p>
      </div>
    </section>

    <Location />
  </main>
);

export default About;
