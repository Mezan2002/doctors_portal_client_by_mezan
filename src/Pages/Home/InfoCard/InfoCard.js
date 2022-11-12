import React from "react";
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const InfoCard = () => {
  return (
    <div className="grid grid-cols-3 mb-10">
      <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="flex py-10 px-12 items-center">
          <div>
            <FaClock className="text-7xl"></FaClock>
          </div>
          <div className="ml-5">
            <h4 className="text-xl mb-5">Opening Hours</h4>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-accent text-white">
        <div className="flex py-10 px-12 items-center">
          <div>
            <FaLocationArrow className="text-7xl"></FaLocationArrow>
          </div>
          <div className="ml-5">
            <h4 className="text-xl mb-5">Visit our location</h4>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="flex py-10 px-12 items-center">
          <div>
            <FaPhoneAlt className="text-7xl"></FaPhoneAlt>
          </div>
          <div className="ml-5">
            <h4 className="text-xl mb-5">Contact us now</h4>
            <p>
              telephone: <br /> +000 123 456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
