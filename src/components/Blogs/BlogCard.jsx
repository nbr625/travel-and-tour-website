import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  image,
  date,
  title,
  excerpt,
  author,
  readTime,
  slug,
}) => (
  <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <Link
      to={`/blogs/${slug}`}
      onClick={() => window.scrollTo(0, 0)}
      className="flex h-full flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap justify-between gap-2 text-xs font-medium text-slate-500">
          <time>{date}</time>
          <span>{readTime}</span>
        </div>

        <h3 className="mt-3 text-xl font-bold leading-snug transition group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 flex-1 leading-6 text-slate-600">
          {excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
          <span className="text-slate-500">By {author}</span>
          <span className="font-semibold text-primary">
            Read guide →
          </span>
        </div>
      </div>
    </Link>
  </article>
);

export default BlogCard;
