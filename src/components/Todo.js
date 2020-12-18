import React, { useContext } from 'react'
import { TodoContext } from '../context/context'

export const Todo = () => {
    const { item, handleDone, handleDelete } = useContext(TodoContext)
    return (
        <>
            <p className={item.isComplete ? 'completed-task' : ''}
                key={item.id}>{item.name}</p>
            <button
                onClick={() => handleDone(item)}
            >done</button>
            <button
                onClick={() => handleDelete(item)}
            >delete</button>
            <hr />
        </>
    )
    // }
}
