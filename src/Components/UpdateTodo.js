import React from 'react';

function UpdateTodo(props) {
  return (
    <div>
        <li>
            <input value={props.text} />
        </li>
    </div>
  )
}

export default UpdateTodo
