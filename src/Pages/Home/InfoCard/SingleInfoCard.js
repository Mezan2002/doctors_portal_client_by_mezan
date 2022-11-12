import React from "react";

const SingleInfoCard = ({ card }) => {
  const { title, description, icons, bgClass } = card;
  return (
    <div className={`card card-side shadow-xl p-6 text-white ${bgClass}`}>
      <figure>
        <img src={icons} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleInfoCard;
