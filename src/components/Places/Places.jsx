import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

export const PlacesData = [
  {
    id: "california-coast",
    img: Img1,
    title: "California Coast",
    location: "California, USA",
    description:
      "A flexible coastal itinerary with ocean views, small towns, and time to explore at your own pace.",
    price: 1250,
    type: "Coastal escape",
  },
  {
    id: "agra-heritage",
    img: Img2,
    title: "Agra Heritage Journey",
    location: "Agra, India",
    description:
      "Discover the Taj Mahal, local craft traditions, and the layered history of one of India's best-known destinations.",
    price: 1850,
    type: "Culture & history",
  },
  {
    id: "maldives-retreat",
    img: Img3,
    title: "Maldives Island Retreat",
    location: "Maldives",
    description:
      "A restorative island stay built around clear water, unhurried days, and optional reef excursions.",
    price: 2450,
    type: "Island retreat",
  },
  {
    id: "sydney-harbour",
    img: Img4,
    title: "Sydney Harbour Week",
    location: "Sydney, Australia",
    description:
      "Balance waterfront landmarks, neighborhood dining, coastal walks, and an easy day beyond the city.",
    price: 2100,
    type: "City & coast",
  },
  {
    id: "los-angeles",
    img: Img5,
    title: "Los Angeles City Break",
    location: "California, USA",
    description:
      "Explore distinct neighborhoods, creative culture, celebrated food, and the Pacific shoreline in one trip.",
    price: 980,
    type: "Urban discovery",
  },
  {
    id: "las-vegas",
    img: Img6,
    title: "Las Vegas & Red Rock",
    location: "Nevada, USA",
    description:
      "Pair the energy of the Strip with desert scenery, local dining, and a quieter day at Red Rock Canyon.",
    price: 1150,
    type: "City & outdoors",
  },
];

const Places = ({
  handleOrderPopup,
  searchCriteria,
  onClearSearch,
}) => {
  const query =
    searchCriteria?.destination?.toLowerCase() ?? "";
  const maxPrice = searchCriteria?.maxPrice ?? Infinity;

  const visiblePlaces = PlacesData.filter((place) => {
    const searchableText =
      `${place.title} ${place.location} ${place.type}`.toLowerCase();

    return (
      searchableText.includes(query) &&
      place.price <= maxPrice
    );
  });

  return (
    <section
      id="destinations"
      className="bg-slate-50 py-16 text-slate-900"
    >
      <div className="container" data-aos="fade-up">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Curated ideas
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Trips worth considering
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Browse a focused set of sample itineraries with clear
              themes and starting prices.
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
                handleOrderPopup={handleOrderPopup}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-bold">
              No trips match those filters
            </h3>

            <p className="mt-2 text-slate-600">
              Try a broader destination or increase the maximum
              budget.
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
