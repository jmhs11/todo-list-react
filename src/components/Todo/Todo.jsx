import './Todo.css'

export const Todo = ({todo = []}) => {
    return (
        <tr>
            <td>{todo.name}</td>
            <td>{todo.description}</td>
            <td>Completed</td>
            <td>Actions</td>
        </tr>
    )
}