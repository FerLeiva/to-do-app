import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm () {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="What do you have to do?"
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm };