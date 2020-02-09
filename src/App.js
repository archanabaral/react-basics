import React from "react";
//import logo from "./logo.svg";

import "./App.css";
//import TodoItem from "./component/TodoItem";
import ContactsCard from "./component/contactCard";

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
  return (
    //anything we want to change from JXS to JS we need to wrap on curly braces
    <div className="todo-list">
      <h1 style={{ color: "red", backgroundColor: "gray" }}>
        GOOD {timeOfDay}
      </h1>

      <div className="contacts">
        <ContactsCard
          name="Mr.Whiskerson"
          imgUrl="http://placekitten.com/300/200"
          Email="kitty@gmail.com"
        />
        <ContactsCard
          name="Felix"
          imgUrl="http://placekitten.com/200/100"
          Email="felix@gmail.com"
        />
        <ContactsCard
          name="Destroyer"
          imgUrl="http://placekitten.com/400/300"
          Email="Dest@gmail.com"
        />
        <ContactsCard
          name="Fluffykins"
          imgUrl="http://placekitten.com/400/200"
          Email="fluffy@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;
