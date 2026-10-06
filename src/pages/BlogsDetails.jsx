import React from "react";
import { Link, useParams } from "react-router-dom";
import { BlogsData } from "../components/Blogs/BlogsComp";

const BlogsDetails = () => {
  const { id } = useParams();

  const article = BlogsData.find(
    (item) => item.slug === id
  );

  if (!article) {
    return (
      <main className="container min-h-[70vh] pt-32 text-center">
        <h1 className="text-3xl font-bold">Guide not found</h1>

        <p className="mt-3 text-slate-600">
          The guide may have moved or the address may be
          incomplete.
        </p>

        <Link
          to="/blogs"
          className="mt-6 inline-block rounded-full bg-primary px-5 py-3 font-semibold text-white"
        >
          Return to the journal
        </Link>
      </main>
    );
  }

  return (
    <main className="pb-20 pt-24 text-slate-900">
      <div className="container max-w-4xl">
        <Link
          to="/blogs"
          className="font-semibold text-primary hover:underline"
        >
          ← All travel guides
        </Link>

        <div className="mt-7 overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt=""
            className="h-[300px] w-full object-cover sm:h-[460px]"
          />
        </div>

        <article className="mx-auto max-w-3xl py-9">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
            <span>{article.author}</span>
            <time>{article.date}</time>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 text-xl leading-8 text-slate-600">
            {article.excerpt}
          </p>

          <div className="mt-9 space-y-6 text-lg leading-8 text-slate-700">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogsDetails;
