import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props) {
    return (
        <div>
            <h1>It is working</h1>
            <Todoitem todos={props.todos} />
        </div>
    )
}

