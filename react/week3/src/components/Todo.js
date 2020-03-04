import React , { useState } from 'react'

function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
 
  const [editTask, seteditTask] = useState(false);
  const [state, setState] = useState({newText: todo.text, newDeadline:todo.deadline});

    return (
      <div
        className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      > 
       <div>
         <p>
      {editTask ? (
        <>
         <input
          type="text"
          value={state.newText}
          onChange={(e) => setState({...state, newText: e.target.value})}
          />

          <input
            type="text"
            value={state.newDeadline}
            onChange={(e) => setState({...state, newDeadline:e.target.value})}
          />
        </>
        ) : (
          <>
            {todo.text}, {todo.deadline} 
          </>
        )} 
          <button id="compButton" type="checkBox" onClick={() => completeTodo(index)}>Complete</button>
          {editTask? (
             <button 
                id="delButton" onClick={()=> {
                seteditTask(false)
                updateTodo(index, 
                  state.newText, 
                  state.newDeadline)
              }} 
             > 
              update
             </button>
          ) : (
            <button 
            id="editButton"
             onClick={()=>{
               seteditTask(true)
               }} 
             > 
             Edit
             </button>
            )
          }  
          <button id="delButton" onClick={() => removeTodo(index)}>Delete</button>
          </p>
         </div>
      </div>
    );
  }

  export default Todo;