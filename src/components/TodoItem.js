import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.onToggleTodo(this.props.id - 1)
    }

    render() {
        const { title, done, id } = this.props
        const isChecked = done ? 'line-through' : 'none'
        return (
            <li className="list-group-item">
                <div className="input-group">
                    <span className="input-group-addon">{id}</span>
                    <label htmlFor="" style={{ textDecoration: isChecked }} className="form-control">{title}</label>
                    <span className="input-group-addon">
                        <input type="checkbox" checked={done} onChange={this.onClick} />
                    </span>
                    <span className="input-group-addon">
                        <input type="button" className="btn btn-danger" value="X" />
                    </span>

                </div>
            </li>
        )
    }
}

export default TodoItem
