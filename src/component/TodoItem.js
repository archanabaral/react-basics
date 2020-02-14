import React from "react";

function TodoItem({data,handleChange}){
  const completedStyle={
    fontStyle:"italic",
    color:"red",
    textDecoration:"line-through"
  }
    return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={data.completed}
            onChange={() =>handleChange(data.id)}
          />
          <p style={data.completed ?completedStyle:null}>{data.text}</p>
        </div>
      );

} 
 
export default TodoItem;
