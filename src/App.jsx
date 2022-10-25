import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

function App() {

  const [todoText,setTodoText] = useState("")
  const [todoList,setTodoList] = useState([
    {
      id:uuid(),
      text:"",
      isDone: false,
    },
  ])

  const [checkFlag,setCheckFlag] = useState(true)

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const handleRemoveTask = (id,index,todo) => {
    const listNum = todoList.length
    if(listNum === 1){
      return setTodoList(todoList.map((todo)=>{
        alert(todo.isDone)
        return{
          ...todo,
          text: "",
        }
      }))
      // setTodoList(todoList.map((todo) => {}delete todo.text))

    }
    if(index === 0) return
    setTodoList(todoList.filter((todo)=>todo.id !== id))
  }

  const toggleTaskCheck = (id) => {
   setTodoList(todoList.map((todo)=>{
     let isDone
     if(todo.id === id){
       isDone = !todo.isDone
     }else{
       isDone = todo.isDone
     }
     return{
       ...todo,
       isDone: isDone,
     }
   }))
  }

  const handleAddTask = (e)=> {
   if (e.key == 'Enter') {
     if(todoText==="")return
     setTodoList([
       ...todoList,
       {
         id:uuid(),
         text:todoText,
       }
     ])
     setTodoText("")
    }
   }

  return (
    <div>
    <div>
      <ul>
        {todoList.map((todo,index)=>{
          return(
        <div key={todo.id}>
          {todo.isDone && <button className='CheckOff-button' onClick={()=>toggleTaskCheck(todo.id)}>✔</button>}
          {todo.isDone || <button className='check-button' onClick={()=>toggleTaskCheck(todo.id)}></button>}
          <input className={todo.isDone ? "completeTodo" : "incompleteTodo"}
                 value={todoList.index}
                 onChange={onChangeTodoText}
                 placeholder="やることを入力してください"
                 onKeyPress={handleAddTask}
          />
          <button onClick={() => handleRemoveTask(todo,todo.id,index)}>
            del
          </button>
        </div>
          )
        })}
      </ul>
    </div>
      </div>
  );
}


export default App;

