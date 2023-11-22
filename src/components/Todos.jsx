// eslint-disable-next-line no-unused-vars
import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'
const Todos = (props) => {
    // eslint-disable-next-line react/prop-types
   
  return (
    <section className={style.todos}>
      {
        // eslint-disable-next-line react/prop-types
        props.todos.map((todo)=>
        <Todo
           todo={todo.todo}
            key={todo.id} 
            id={todo.id} 
            // eslint-disable-next-line react/prop-types
            onRemoveTodo={props.onRemoveTodo}
            />)
      }
    </section>
  )
}

export default Todos
