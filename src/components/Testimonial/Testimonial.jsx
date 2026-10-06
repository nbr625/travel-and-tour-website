import React from "react";
import Slider from "react-slick";

const principles = [
  {
    id: 1,
    eyebrow: "Discover",
    title: "Start with the decisions that matter",
    text: "Destination, timing, travel style, and budget are visible early so people can narrow their choices without digging through the interface.",
  },
  {
    id: 2,
    eyebrow: "Compare",
    title: "Keep important details consistent",
    text: "Every trip card follows the same information hierarchy, making locations, themes, descriptions, and starting prices easy to scan.",
  },
  {
    id: 3,
    eyebrow: "Continue",
    title: "Make the next step obvious",
    text: "Clear calls to action and an accessible inquiry flow help people continue without wondering what will happen after they click.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-white py-16 text-slate-900"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experience principles
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Designed around real travel decisions
          </h2>

          <p className="mt-3 text-slate-600">
            A focused interface should help people understand their
            options and move forward with confidence.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="mx-auto max-w-5xl"
        >
          <Slider {...settings}>
            {principles.map(
              ({ id, eyebrow, title, text }) => (
                <div key={id} className="px-3 pb-8">
                  <article className="min-h-[245px] rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {eyebrow}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {text}
                    </p>
                  </article>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
