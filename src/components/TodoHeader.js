import React from 'react'


const TodoHeader = ({ title, value, onChange, onAdd }) => {
    return (
        <div>
            <div className="card-block">
                <h4 className="card-title text-center">{title}</h4>
            </div>
            <div className="card-block">
                <div className="input-group">
                    <input type="text" className="form-control" value={value} onChange={onChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={ onAdd }>+</button>
                    </span>
                    <span className="input-group-addon">
                        <input type="checkbox" className="btn btn-secondary" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TodoHeader