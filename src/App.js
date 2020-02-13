import React from "react";
//import logo from "./logo.svg";

import "./App.css";
//import TodoItem from "./component/TodoItem";
import ContactsCard from "./component/contactCard";
import contactData from "./contactData";
import Joke from "./component/Joke";
import JokesData from "./jokesData";
import Data from "./component/class";
import Event from "./component/event";
import Todo from "./component/todo";

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
    return <Joke key={joke.id} quiz={joke} />;
  });
  const contacts = contactData.map(contact => {
    return <ContactsCard key={contact.id} data={contact} />;
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
      <div>{contacts}</div>
      <div>{jokeComponents}</div>
      <Data />
      <Event />
      <Todo />
    </div>
  );
}

export default App;
