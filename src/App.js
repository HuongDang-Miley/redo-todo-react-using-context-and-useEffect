
import './App.css';
import { useState } from 'react'
import { uuid } from 'uuidv4';

function App() {

let initialArray = window.localStorage.getItem("todos")
? window.localStorage.getItem("todos")
: []
  
  const [todoList, setTodoList] = useState(initialArray)
  const [inputValue, setInputValue] = useState("")

  function addTodo(e) {
    e.preventDefault()
    if (inputValue.length !== 0) {
      let newTodoList = [
        ...todoList,
        {
          id: uuid(),
          name: inputValue,
          isComplete: false
        }
      ]
      setTodoList(newTodoList)
    }
    setInputValue("")
  }

  function handleDone(item) {
    if (item.isComplete === true) {
      item.isComplete = false
    }
    else if (item.isComplete === false) {
      item.isComplete = true
    }
    let newTodoList = [...todoList]
    setTodoList(newTodoList)
  }

  function handleDelete(deleteItem){
    let newTodoList = [...todoList]
    const afterDeleteTodo = newTodoList.filter(item => item!==deleteItem)
    setTodoList(afterDeleteTodo)
  }

  return (
    <div className="App">
      this is the todo app
      <form onSubmit={addTodo}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Add</button>

        {todoList.map(item => {
          return (
            <>
              <li
                className={item.isComplete ? 'completed-task' : ''}
                key={item.id}>{item.name}</li>
              <button
                onClick={() => handleDone(item)}
              >done</button>
              <button
                onClick={() => handleDelete(item)}
              >delete</button>
              <hr />
            </>
          )
        })}
      </form>
    </div>
  );
}

export default App;
