import React from 'react'

export default function Todoitem(props){
    return (
        <>
        <div className="card">
        <img src={props.todos[0].src} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.todos[0].title}</h5>
            <p className="card-text">{props.todos[0].des}</p>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
        </div>
        </>
    )
}

