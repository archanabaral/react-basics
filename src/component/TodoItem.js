import React from "react";

function TodoItem({data,handleChange}){
    return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={data.completed}
            onChange={() =>handleChange(data.id)}
          />
          <p>{data.text}</p>
        </div>
      );

} 
 
export default TodoItem;
