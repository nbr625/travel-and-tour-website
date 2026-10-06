import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => (
  <main className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4 pt-20 text-center text-slate-900">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        404 · Route not found
      </p>

      <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
        This journey ends here
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        The page may have moved, or the address may contain a
        typo.
      </p>

      <Link
        to="/"
        className="mt-7 inline-block rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-primary"
      >
        Return home
      </Link>
    </div>
  </main>
);

export default NoPage;
