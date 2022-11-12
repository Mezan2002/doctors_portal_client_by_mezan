import React from "react";
import BannerImage from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen lg:mx-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 w-full">
            <img src={BannerImage} className="rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
