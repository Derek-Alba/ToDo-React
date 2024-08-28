import React, { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';


function TodoSearch() {
    const { searchValue, setSearchValue, } = useContext(TodoContext)
    return (
        <div className="input-container">
            <input
                className="input"
                name="text"
                type="text"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                    // Evento le dice al estado que guarde el valor del input a travez de la funcion set
                }}
                placeholder="Buscar..."
            />
        </div>
    )
}


export { TodoSearch };