import './TodoTable.css';
import { Todo } from '../Todo/Todo';

export const TodoTable = ({ todos, setTodos }) => {

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
                    <Todo key={todo.id} todo={todo} />
                ))}
            </tbody>
        </table>
    )
}