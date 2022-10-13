import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

 const [todoText,setTodoText] = useState("")
  const [todoList,setTodoList] = useState([""])

  const [checkFlag,setCheckFlag] = useState(true)

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const handleClickCheck = () => {
    setCheckFlag(!checkFlag);
  }

  const handleEnter = (e)=> {
   if (e.key == 'Enter') {
      // alert("hello")
     if(todoText==="")return
     const addTodos=[...todoList,todoText]
     setTodoList(addTodos)
     setTodoText("")
    }
   }

  return (
    <div>
    <div>
      <ul>
        {todoList.map((todo,index)=>{
          return(
        <div key={todo}className="field">
          {checkFlag && <button className='CheckOff-button' onClick={()=>handleClickCheck(index)}>✔</button>}
          {checkFlag || <button className='check-button' onClick={()=>handleClickCheck(index)}></button>}
          <input className="inputTodo"
                 value={todoList.index}
                 onChange={onChangeTodoText}
                 placeholder="やることを入力してください"
                 onKeyPress={handleEnter}
          />
        </div>
          )
        })}
      </ul>
    </div>
      </div>
  );
}


export default App;

