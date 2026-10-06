import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Destinations", link: "/best-places" },
  { title: "Travel journal", link: "/blogs" },
  { title: "About this project", link: "/about" },
];

const Footer = () => (
  <footer className="relative isolate overflow-hidden py-10 text-slate-900">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    >
      <source src={NatureVid} type="video/mp4" />
    </video>

    <div className="container">
      <div className="grid gap-10 rounded-t-3xl bg-white/90 p-8 backdrop-blur-md md:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src={FooterLogo}
            alt="TravelloGo"
            className="h-16 w-auto"
          />

          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            A travel discovery and itinerary concept built to
            demonstrate responsive React UI, reusable components,
            client-side routing, filtering, form state, and
            accessible interaction design.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Portfolio prototype only. No bookings or payments are
            processed.
          </p>

          <div className="mt-6 flex items-center gap-4 text-2xl">
            <a
              href="https://github.com/nbr625"
              target="_blank"
              rel="noreferrer"
              aria-label="Nicolas Berrizbeitia on GitHub"
              className="transition hover:text-primary"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-berrizbeitia-658212b6/"
              target="_blank"
              rel="noreferrer"
              aria-label="Nicolas Berrizbeitia on LinkedIn"
              className="transition hover:text-primary"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:nbr625@gmail.com"
              aria-label="Email Nicolas Berrizbeitia"
              className="transition hover:text-primary"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-lg font-bold">Explore</h2>

          <ul className="mt-4 space-y-3">
            {FooterLinks.map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-slate-600 transition hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="rounded-b-3xl bg-slate-950 px-6 py-4 text-center text-sm text-white">
        Designed and built by Nicolas Berrizbeitia ·{" "}
        <a
          className="font-semibold text-cyan-300 hover:underline"
          href="https://github.com/nbr625"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
