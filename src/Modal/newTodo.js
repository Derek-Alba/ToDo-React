import React from 'react'
import { TodoContext } from '../TodoContext'
import './modal.css'

function TodoForm() {
    const { setOpenModal, addTodo,
        newTodoValue, setNewTodoValue, id, setId, Update } = React.useContext(TodoContext)


    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }
    const update = (event) => {
        event.preventDefault()
        Update(id, newTodoValue)
        setOpenModal(false)
        setId(false)
        setNewTodoValue('')
    }
    const onCancel = () => {
        setOpenModal(false)
        setNewTodoValue('')
        setId(false)
    }
    return (
        <>
            <form onSubmit={id ? update : onSubmit}>
                <div className="brutalist-card">
                    <div className="brutalist-card__header">
                        <div className="brutalist-card__alert">Crea Nueva Tarea!!!</div>
                    </div>
                    <div className="brutalist-card__message">
                        <textarea
                            value={newTodoValue}
                            onChange={(event) =>
                                setNewTodoValue(event.target.value)
                            }
                            placeholder='Terminar curso React Basico' />
                    </div>
                    <div className="brutalist-card__actions">
                        <div className='container-botones'>
                            <button className="brutalist-card__button brutalist-card__button--mark" type='button' onClick={onCancel}>Cancelar</button>
                            <button className="brutalist-card__button brutalist-card__button--read" >{id ? 'Actualizar' : 'Crear'}</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export { TodoForm }
