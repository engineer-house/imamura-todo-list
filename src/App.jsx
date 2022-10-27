import './App.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { TodoList } from './components/TodoList'

function App () {

  const [todoList, setTodoList] = useState([
    {
      id: uuid(),
      text: '',
      isDone: false,
    },
  ])

  const handleTodoText = (id, text) => {
    setTodoList(todoList.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return {
          ...todo,
          text,
        }
      },
    ))
  }

  const handleRemoveTask = (id) => {
    const listNum = todoList.length
    if (listNum === 1) {
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
          inDone: false,
        },
      ])
    }
  }

  return (
    <div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <TodoList
                todo={todo}
                toggleTaskCheck={toggleTaskCheck}
                handleTodoText={handleTodoText}
                handleAddTask={handleAddTask}
                handleRemoveTask={handleRemoveTask}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App

