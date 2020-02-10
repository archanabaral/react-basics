import React from "react";
function Joke({ question, punchLine }) {
  return (
    <div>
      <h1 style={{display:!question && "none"}}>Question:{question}</h1>
      <h2 style={{color:!question&&"red"}}>Answer:{punchLine}</h2>
    </div>
  );
}

export default Joke;
