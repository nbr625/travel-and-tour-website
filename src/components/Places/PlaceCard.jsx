import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="overflow-hidden">
      <img
        src={img}
        alt={`${title} travel destination`}
        className="h-[230px] w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="flex min-h-[265px] flex-col p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {type}
      </p>

      <h3 className="mt-2 text-xl font-bold">{title}</h3>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <IoLocationSharp aria-hidden="true" />
        <span>{location}</span>
      </div>

      <p className="mt-4 flex-1 leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <p className="text-sm text-slate-500">
          From{" "}
          <span className="text-xl font-bold text-slate-900">
            ${price.toLocaleString()}
          </span>
        </p>

        <button
          type="button"
          onClick={() => handleOrderPopup?.(title)}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Plan this trip
        </button>
      </div>
    </div>
  </article>
);

export default PlaceCard;
