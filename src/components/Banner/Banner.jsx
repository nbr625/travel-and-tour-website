import React from "react";
import TravelImg from "../../assets/travelbox.png";
import {
  MdFlight,
  MdOutlineLocalHotel,
} from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const serviceItems = [
  {
    label: "Flexible routes",
    icon: MdFlight,
    color: "bg-violet-100 text-violet-700",
  },
  {
    label: "Thoughtful stays",
    icon: MdOutlineLocalHotel,
    color: "bg-orange-100 text-orange-700",
  },
  {
    label: "Useful connectivity",
    icon: IoIosWifi,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Local food notes",
    icon: IoFastFoodSharp,
    color: "bg-amber-100 text-amber-700",
  },
];

const Banner = () => (
  <section
    id="services"
    className="bg-slate-100 py-16 text-slate-900"
  >
    <div className="container">
      <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
        <div data-aos="flip-up">
          <img
            src={TravelImg}
            alt="A compact travel planning kit"
            className="mx-auto h-[350px] w-full max-w-[470px] rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 lg:px-10">
          <div data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              A clearer way to plan
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Useful details before you commit
            </h2>
          </div>

          <p
            data-aos="fade-up"
            className="leading-7 text-slate-600"
          >
            Each trip concept brings the major decisions into one
            place, including pace, starting cost, setting, and the
            practical details that shape the experience.
          </p>

          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {serviceItems.map(
              ({ label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-11 w-11 rounded-full p-3 ${color}`}
                  />
                  <span className="font-semibold">{label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
