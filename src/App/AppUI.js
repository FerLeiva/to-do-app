import React from "react";
import './App.css'
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";

function AppUI () {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError error={error}/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}
                        
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <TodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export { AppUI };