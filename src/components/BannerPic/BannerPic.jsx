import React from "react";

const BannerPic = ({ img, alt }) => (
  <div
    role="img"
    aria-label={alt}
    data-aos="zoom-in"
    className="h-[320px] w-full bg-cover bg-center bg-fixed sm:h-[420px]"
    style={{
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.12), rgba(15, 23, 42, 0.28)), url(${img})`,
    }}
  />
);

export default BannerPic;
