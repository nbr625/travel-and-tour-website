import React from "react";

const Hero = ({ onSearch }) => {
  const [destination, setDestination] = React.useState("");
  const [travelDate, setTravelDate] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState(2500);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch?.({
      destination: destination.trim(),
      travelDate,
      maxPrice,
    });
  };

  return (
    <section
      id="home"
      className="flex h-full items-center bg-slate-950/55 px-4"
    >
      <div className="container">
        <div className="max-w-3xl text-white">
          <p
            data-aos="fade-up"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200"
          >
            Curated travel inspiration
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 text-4xl font-bold leading-tight sm:text-6xl"
          >
            Find a trip that fits the way you want to travel
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg"
          >
            Compare city breaks, cultural journeys, and restorative escapes
            with clear pricing and practical guidance.
          </p>
        </div>

        <form
          data-aos="fade-up"
          data-aos-delay="450"
          onSubmit={handleSubmit}
          className="relative mt-8 rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label
                htmlFor="destination"
                className="text-sm font-semibold text-slate-700"
              >
                Destination
              </label>

              <input
                id="destination"
                name="destination"
                type="search"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Try Sydney or India"
                className="mt-2 w-full rounded-full bg-slate-100 px-4 py-3 text-slate-900 outline-none ring-primary transition focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="travel-date"
                className="text-sm font-semibold text-slate-700"
              >
                Preferred date
              </label>

              <input
                id="travel-date"
                name="travelDate"
                type="date"
                value={travelDate}
                onChange={(event) => setTravelDate(event.target.value)}
                className="mt-2 w-full rounded-full bg-slate-100 px-4 py-3 text-slate-900 outline-none ring-primary transition focus:ring-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="max-price"
                  className="text-sm font-semibold text-slate-700"
                >
                  Maximum budget
                </label>

                <output
                  htmlFor="max-price"
                  className="font-bold text-slate-900"
                >
                  ${Number(maxPrice).toLocaleString()}
                </output>
              </div>

              <input
                id="max-price"
                name="maxPrice"
                type="range"
                min="500"
                max="3000"
                step="50"
                value={maxPrice}
                onChange={(event) =>
                  setMaxPrice(Number(event.target.value))
                }
                className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-primary to-secondary accent-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mx-auto mt-6 block rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Explore matching trips
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
