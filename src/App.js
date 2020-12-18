
import './App.css';
import { useState, useEffect } from 'react'
import { uuid } from 'uuidv4';
import { TodoInput } from './components/TodoInput';
import { Todo } from './components/Todo';
import { TodoInputContext, TodoContext } from './context/context';

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

  function handleDelete(deleteItem) {
    let newTodoList = [...todoList]
    const afterDeleteTodo = newTodoList.filter(item => item !== deleteItem)
    setTodoList(afterDeleteTodo)
  }

  const showTodoList = () => {
    return todoList.map(item=>{return(
      <TodoContext.Provider value={{item, handleDone, handleDelete}}>
        <Todo/>
      </TodoContext.Provider> 
      )})
  } 

  return (
    <div className="App">
      < TodoInputContext.Provider value={{todoList, addTodo, inputValue, setInputValue }}>
        <TodoInput />
      </TodoInputContext.Provider >
      {showTodoList()}      
    </div>
  );
}

export default App;
