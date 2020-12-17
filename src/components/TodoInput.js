import React, {useContext} from 'react'
import { TodoInputContext, TodoContext } from '../context/context';

export const TodoInput = () => {
    const {addTodo, setInputValue} = useContext(TodoInputContext)
    return (
        <form onSubmit={addTodo}>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button>Add</button>
        </form>
    )
}
