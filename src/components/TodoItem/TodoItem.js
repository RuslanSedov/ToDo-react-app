import './TodoItem.css'
import React from 'react'

function TodoItem(props) {
  return (
    <div className={props.item.completed ? 'ToDo ToDo__item' : 'ToDo null'}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem
