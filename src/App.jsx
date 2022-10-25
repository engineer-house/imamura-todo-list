import './App.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App () {
  const [todoList, setTodoList] = useState([
    {
      id: uuid(),
      text: '',
      isDone: false,
    },
  ])

  const onChangeTodoText = (id, text) => {
    setTodoList(todoList.map((todo) => ({
      ...todo,
      text: todo.id === id ? text : todo.text
    })))
  }

  const handleRemoveTask = (id) => {
    if (todoList.length === 1) {
      return setTodoList([
        {
          id: uuid(),
          text: '',
          isDone: false,
        },
      ])
    }
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const toggleTaskCheck = (id) => {
    setTodoList(todoList.map((todo) => {
      return {
        ...todo,
        isDone: todo.id === id ? !todo.isDone : todo.isDone,
      }
    }))
  }

  const handleAddTask = (e) => {
    if (e.key === 'Enter') {
      setTodoList([
        ...todoList,
        {
          id: uuid(),
          text: '',
          isDone: false,
        }
      ])
    }
  }

  return (
    <div>
      <div>
        <ul>
          {todoList.map((todo, index) => {
            return (
              <div key={todo.id}>
                <button
                  className={todo.isDone ? 'CheckOff-button' : 'check-button'}
                  onClick={() => toggleTaskCheck(todo.id)}
                >{todo.isDone && '✔'}</button>
                <input
                  className={todo.isDone ? 'completeTodo' : 'incompleteTodo'}
                  value={todo.text}
                  onChange={(e) => onChangeTodoText(todo.id, e.target.value)}
                  placeholder="やることを入力してください"
                  onKeyDown={handleAddTask}
                />
                <button onClick={() => handleRemoveTask(todo, todo.id, index)}>
                  del
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App

