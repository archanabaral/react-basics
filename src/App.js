import React from "react";
//import logo from "./logo.svg";

import "./App.css";
//import TodoItem from "./component/TodoItem";
import ContactsCard from "./component/contactCard";
import Joke from "./component/Joke";
import JokesData from "./jokesData";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "MORNING";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "AFTER NOON";
  } else {
    timeOfDay = "NIGHT";
  }
  const jokeComponents = JokesData.map(joke => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  return (
    //anything we want to change from JXS to JS we need to wrap on curly braces
    // <div className="todo-list">
    //   <h1 style={{ color: "red", backgroundColor: "gray" }}>
    //     GOOD {timeOfDay}
    //   </h1>
    <div>
      <h1 style={{ color: "red", backgroundColor: "gray" }}>
        GOOD {timeOfDay}
      </h1>

      <div className="contacts">
        <ContactsCard
          contacts={{
            name: "Mr.Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            email: "kitty@gmail.com"
          }}
        />
        <ContactsCard
          contacts={{
            name: "Felix",
            imgUrl: "http://placekitten.com/200/100",
            email: "felix@gmail.com"
          }}
        />
        <ContactsCard
          contacts={{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/400/300",
            email: "Dest@gmail.com"
          }}
        />
        <ContactsCard
          contacts={{
            name: "Fluffykins",
            imgUrl: "http://placekitten.com/400/200",
            email: "fluffy@gmail.com"
          }}
        />
      </div>
      <div>{jokeComponents};</div>
    </div>
  );
}

export default App;
