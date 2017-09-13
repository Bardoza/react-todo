import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoContent from './TodoContent'

class Todos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                title: "Zelda",
                done: false
            },
            {
                title: 'Dragon ball Fighterz',
                done: true
            }
            ],
            filter: true,
            newTodo: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    onInputChange(e) {
        this.setState({
            newTodo: e.target.value
        })
    }

    addTodo() {
        const { newTodo, todos } = this.state

        const newTodoObj = {
            title: newTodo,
            done: false
        }

        this.setState({
            todos: [...todos, newTodoObj],
            newTodo: ''
        })
    }

    toggleTodo(index) {
        const { todos } = this.state
        const todo = todos[index]

        this.setState({
            todos: [
                ...todos.slice(0, index),
                { ...todo, done: !todo.done },
                ...todos.slice(index + 1)
            ]
        })
    }

    render() {
        return (
            <div className="card">
                <TodoHeader
                    title={this.props.title}
                    value={this.state.newTodo}
                    onChange={this.onInputChange}
                    onAdd={this.addTodo}
                />
                <TodoContent
                    todos={this.state.todos.filter(todo => {
                        if (this.state.filter) {
                            return !todo.done
                        } else {
                            return true
                        }
                    })}
                    onToggleTodo={this.toggleTodo}
                />
            </div>
        )
    }
}

export default Todos