import './AddTodo.css';

export const AddTodo = ({ handleAddTodo }) => {

    const handleSubmit = e => {
        e.preventDefault();
        handleAddTodo({
            "id": (+new Date()).toString(),
            "name": e.target[0].value,
            "description": e.target[1].value,
            "completed": false
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Description" />
                <button>Add Todo</button>
            </form>
        </div>
    )
}