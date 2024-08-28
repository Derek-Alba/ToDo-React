import { useContext } from 'react'
import './TodoCreateBottom.css'
import { TodoContext } from '../TodoContext'
function TodoCreateBottom() {
    const { setOpenModal, openModal } = useContext(TodoContext)
    return (
        <button className='TodoCreateBottom'
            onClick={() => {
                openModal ? setOpenModal(false) : setOpenModal(true)

            }}>
            + </button>
    )
}

export { TodoCreateBottom }