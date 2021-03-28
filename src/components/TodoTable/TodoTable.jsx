import './TodoTable.css';
import { useEffect, useState } from 'react';
import {Todo} from '../Todo/Todo';
import axios from 'axios';

export const TodoTable = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(res => setTodos(res.data))
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
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo}/>
                ))}
            </tbody>
        </table>
    )
}