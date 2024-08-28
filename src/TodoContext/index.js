import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()


function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        error,
        loading } = useLocalStorage('TODOS_V1', [])
    const {
        item: contador,
        saveItem: saveContador, } = useLocalStorage('CONTADOR_V1', 0)

    const [searchValue, setSearchValue] = React.useState('') // Estado
    const [openModal, setOpenModal] = React.useState(false) // Estado
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const [id, setId] = React.useState()
    const completedTodos = todos.filter(todo => todo.completed).length  //Constante
    const totalTodos = todos.length
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase()
            const todoSearch = searchValue.toLowerCase()
            return todoText.includes(todoSearch)
        }
    )
    const addTodo = (text) => {
        if (text === '') {
           
        } else {
            const newTodos = [...todos]
            newTodos.push({
                id: contador + 1,
                text: text,
                completed: false,
                like: 0
            })
            saveContador(contador + 1)
            saveTodos(newTodos)
        }
        
    }
    const Update = (id, text) => {
        if (text === '') {
            
        } else {
            const newTodos = [...todos]
            const index = newTodos.findIndex((todo) => todo.id === id)
            newTodos[index].text = text
            saveTodos(newTodos)
        }

    }
    const edit = (id) => {
        setOpenModal(true)
        setId(id)
        const newTodos = [...todos]
        const index = newTodos.findIndex((todo) => todo.id === id)
        setNewTodoValue(newTodos[index].text)
    }
    const completeTodo = (id) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex((todo) => todo.id === id)
        newTodos[index].completed ? newTodos[index].completed = false : newTodos[index].completed = true
        saveTodos(newTodos)
    }
    const deleteTodo = (id) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex((todo) => todo.id === id)
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }

    const like = (id) => {
        const newLike = [...todos]
        const index = newLike.findIndex((todo) => todo.id === id)
        newLike[index].like += 1
        saveTodos(newLike)
    }
    const dislike = (id) => {
        const newLike = [...todos]
        const index = newLike.findIndex((todo) => todo.id === id)
        if (newLike[index].like > 0) {
            newLike[index].like -= 1
            saveTodos(newLike)
        } else {

        }
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            like,
            dislike,
            openModal,
            setOpenModal,
            addTodo,
            Update,
            edit,
            newTodoValue,
            setNewTodoValue,
            id,
            setId
        }} >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }