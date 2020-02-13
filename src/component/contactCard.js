import React from "react";

function contactsCard({ data }) {
  // console.log(contacts);
  //const { contacts } = props;
  return (
    <div className="contact-card">
      <h1>Contact Card</h1>
      <img src={data.imgUrl} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.email}</p>
    </div>
  );
}

export default contactsCard;
