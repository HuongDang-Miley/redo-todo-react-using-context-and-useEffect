import React, { useContext } from 'react'
import { TodoInputContext, TodoContext } from '../context/context';

export const TodoInput = () => {
    const { addTodo, todoList, inputValue, setInputValue } = useContext(TodoInputContext)

    return (
        <form onSubmit={addTodo}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button>Add</button>
        </form>
    )
}
