import React from "react";

function contactsCard(props) {
  //console.log(props);
  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.Email}</p>
    </div>
  );
}

export default contactsCard;
