import React from 'react'

export const TodoList = (props) => {
  const { todo, toggleTaskCheck, handleTodoText, handleAddTask, handleRemoveTask } = props
  return (
    <div key={todo.id}>
      {todo.isDone && <button className="CheckOff-button" onClick={() => toggleTaskCheck(todo.id)}>✔</button>}
      {todo.isDone || <button className="check-button" onClick={() => toggleTaskCheck(todo.id)}/>}
      <input className={todo.isDone ? 'completeTodo' : 'incompleteTodo'}
             value={todo.text}
             onChange={(event) => handleTodoText(todo.id, event.target.value)}
             placeholder="やることを入力してください"
             onKeyPress={handleAddTask}
      />
      <button onClick={() => handleRemoveTask(todo.id)}>
        del
      </button>
    </div>
  )
}