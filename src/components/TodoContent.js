import React from 'react'
import TodoItem from './TodoItem'

const TodoContent = ({ todos, onToggleTodo }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((t, ix) => <TodoItem
                key={ix}
                {...t}
                id={ix + 1}
                onToggleTodo={onToggleTodo}
            />)}
        </ul>
    )
}

export default TodoContent

