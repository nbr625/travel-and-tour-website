import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

export const BlogsData = [
  {
    id: 1,
    slug: "thoughtful-first-visit-to-agra",
    image: Img1,
    title: "Planning a thoughtful first visit to Agra",
    excerpt:
      "A practical framework for seeing the Taj Mahal while leaving room for the history, craft, and daily life around it.",
    content: [
      "Agra rewards more than a quick landmark stop. Begin with an early visit to the Taj Mahal, when the grounds are cooler and the pace is calmer, then give the rest of the day to the city beyond its most famous monument.",
      "Agra Fort provides useful historical context and strong views across the Yamuna River. Local workshops and markets add another layer to the visit, especially for travelers interested in marble inlay, textiles, and regional food.",
      "A comfortable first itinerary allows two nights. That creates enough time for an unhurried arrival, one full sightseeing day, and flexibility for weather or crowds without turning the trip into a checklist.",
    ],
    author: "TravelloGo Editorial",
    date: "September 18, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    slug: "choose-the-right-island-stay",
    image: Img2,
    title: "How to choose an island stay that fits your pace",
    excerpt:
      "Use access, activities, meal plans, and transfer time to compare island resorts more meaningfully than price alone.",
    content: [
      "Island trips can look similar in photographs while feeling very different in practice. Start with the experience you want: quiet recovery, water activities, family time, or a social resort atmosphere.",
      "Transfer logistics matter. A beautiful property may require a long seaplane connection or fixed boat schedule, so compare total travel time alongside the nightly rate. Meal plans and included equipment can also change the real cost substantially.",
      "Before booking, check the house reef, seasonal weather, cancellation terms, and what is available without an added excursion. Those details usually reveal which option best matches your priorities.",
    ],
    author: "TravelloGo Editorial",
    date: "September 11, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    slug: "build-a-calmer-coastal-itinerary",
    image: Img3,
    title: "How to build a calmer coastal itinerary",
    excerpt:
      "A slower route, fewer hotel changes, and one flexible day can make a coastal trip feel considerably more restorative.",
    content: [
      "Coastal trips often become exhausting when every scenic stop turns into another hotel change. Choose one or two bases and explore outward, allowing the route to support the experience instead of dominating it.",
      "Keep driving days short enough to stop when something catches your attention. Viewpoints, beaches, and small towns are often the memorable parts of the trip, and tightly scheduled reservations leave little room for them.",
      "Build in one unscheduled day. It can absorb bad weather, become a rest day, or make space for a place you discover along the way. Flexibility is part of the itinerary, not an absence of planning.",
    ],
    author: "TravelloGo Editorial",
    date: "September 4, 2026",
    readTime: "4 min read",
  },
];

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
        Short, useful guides for comparing destinations and making
        more confident travel decisions.
      </p>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BlogsData.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogsComp;
