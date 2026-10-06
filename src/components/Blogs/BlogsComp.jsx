import React from "react";
import BlogCard from "./BlogCard";
import { BlogsData } from "../../data/blogs";

const BlogsComp = () => (
  <section
    id="journal"
    className="bg-white py-16 text-slate-900"
  >
    <div className="container" data-aos="fade-up">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Travel journal
      </p>

      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
        Plan with better context
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        Short, useful guides for comparing destinations
        and making more confident travel decisions.
      </p>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BlogsData.map((item) => (
          <BlogCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  </section>
);

export default BlogsComp;
