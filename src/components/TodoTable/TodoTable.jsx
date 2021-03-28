import './TodoTable.css';
import { useEffect, useState } from 'react';
import {Todo} from '../Todo/Todo';

export const TodoTable = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(json => setTodos(json))
    }, [])

    return (
        <table className={'todo-table'}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <Todo todo={todos[0]}/>
            </tbody>
        </table>
    )
}