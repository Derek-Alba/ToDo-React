import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoIcon/TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoItem } from '../TodoIcon/TodoItem'
import { TodoCreateBottom } from '../TodoCreateBottom'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'
import { useContext } from 'react'
import { Modal } from '../Modal'
import { TodoForm } from '../Modal/newTodo.js'
import { Error } from '../TodosError/errorCoincidencia.js'




function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        like,
        dislike,
        openModal,
        setOpenModal,
        edit,
        searchValue,




    } = useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0 && searchValue.length === 0) && <EmptyTodos />}
                {(searchValue.length > 0 && searchedTodos.length === 0) && <Error />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onLike={() => like(todo.id)}
                        onDisLike={() => dislike(todo.id)}
                        likes={todo.like}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        onEdit={() => edit(todo.id)}


                    />

                ))}

            </TodoList>

            <TodoCreateBottom />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>)

            }
        </>
    )
}

export { AppUI }