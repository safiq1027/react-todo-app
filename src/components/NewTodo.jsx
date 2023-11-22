// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./newTodo.module.css"

const NewTodo = (props) => {
  const [todo, setTodo] = useState({title : "", desc : ""});
  const {title,desc} = todo;

  const handleChange = (event)=>{
   const name = event.target.name;
   setTodo((oldTodo)=>{
    return {...oldTodo,[name]:event.target.value}
   })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(todo)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit} >
      <div className={style["form-field"]}>
        <label htmlFor="title"> Title : </label>
        <input type="text" name='title' id='title' value={title} onChange={handleChange} />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc"> Description : </label>
        <textarea type="text" name='desc' id='desc' value={desc} onChange={handleChange} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  )
}

export default NewTodo
