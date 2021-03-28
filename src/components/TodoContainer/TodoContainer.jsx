import './TodoContainer.css';
import { useState, useEffect } from 'react';
import { TodoTable } from '../TodoTable/TodoTable';
import { AddTodo } from '../AddTodo/AddTodo';
import axios from 'axios';

export const TodoContainer = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = addTodo => {
        setTodos([...todos, addTodo]);
        axios.post('http://localhost:3001/todos', addTodo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(res => setTodos(res.data))
    }, [])

    return (
        <div className="container">
            <AddTodo handleAddTodo={handleAddTodo} />
            <TodoTable todos={todos} setTodos={setTodos} />
        </div>
    )
}