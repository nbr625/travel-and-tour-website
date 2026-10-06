import React from "react";
import PlaceCard from "./PlaceCard";
import { PlacesData } from "../../data/places";

const Places = ({
  handleOrderPopup,
  searchCriteria,
  onClearSearch,
}) => {
  const query =
    searchCriteria?.destination?.toLowerCase() ??
    "";

  const maxPrice =
    searchCriteria?.maxPrice ?? Infinity;

  const visiblePlaces = PlacesData.filter(
    (place) => {
      const searchableText =
        `${place.title} ${place.location} ${place.type}`.toLowerCase();

      return (
        searchableText.includes(query) &&
        place.price <= maxPrice
      );
    }
  );

  return (
    <section
      id="destinations"
      className="bg-slate-50 py-16 text-slate-900"
    >
      <div
        className="container"
        data-aos="fade-up"
      >
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Curated ideas
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Trips worth considering
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Browse a focused set of sample itineraries
              with clear themes and starting prices.
            </p>

            {searchCriteria?.travelDate && (
              <p className="mt-2 text-sm font-medium text-slate-500">
                Preferred departure:{" "}
                {new Date(
                  `${searchCriteria.travelDate}T00:00:00`
                ).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          {searchCriteria && (
            <button
              type="button"
              onClick={onClearSearch}
              className="self-start font-semibold text-primary hover:underline sm:self-auto"
            >
              Clear search
            </button>
          )}
        </div>

        {visiblePlaces.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePlaces.map((item) => (
              <PlaceCard
                key={item.id}
                {...item}
                handleOrderPopup={
                  handleOrderPopup
                }
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-bold">
              No trips match those filters
            </h3>

            <p className="mt-2 text-slate-600">
              Try a broader destination or increase
              the maximum budget.
            </p>

            <button
              type="button"
              onClick={onClearSearch}
              className="mt-5 rounded-full bg-primary px-5 py-2 font-semibold text-white"
            >
              Show all trips
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Places;
