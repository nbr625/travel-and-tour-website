import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [selectedDestination, setSelectedDestination] = React.useState("");
  const [searchCriteria, setSearchCriteria] = React.useState(null);

  const handleOrderPopup = (destination = "") => {
    setSelectedDestination(destination);
    setOrderPopup(true);
  };

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);

    requestAnimationFrame(() => {
      document
        .getElementById("destinations")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main>
      <div className="relative h-[760px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>

        <Hero onSearch={handleSearch} />
      </div>

      <Places
        searchCriteria={searchCriteria}
        onClearSearch={() => setSearchCriteria(null)}
        handleOrderPopup={handleOrderPopup}
      />

      <BannerPic
        img={BannerImg}
        alt="Travelers overlooking a scenic destination"
      />

      <BlogsComp />
      <Banner />

      <BannerPic
        img={Banner2}
        alt="A scenic landscape selected for travel inspiration"
      />

      <Testimonial />

      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        selectedDestination={selectedDestination}
      />
    </main>
  );
};

export default Home;
