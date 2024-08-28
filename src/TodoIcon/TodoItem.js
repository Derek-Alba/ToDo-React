import './TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import { DisLikeIcon } from './dislike'
import { LikeIcon } from './like'

function TodoItem({ text, completed, onComplete, onDelete, likes, onLike, onDisLike, onEdit }) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={completed}
                onComplete={onComplete} />

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <button onClick={onEdit}>Editar </button>
            <span className="contador">
                {likes}
            </span>
            <button onClick={onLike} className="btn">
                <LikeIcon />
            </button>
            <button onClick={onDisLike} className="btn">
                <DisLikeIcon />
            </button>
            <DeleteIcon
                onDelete={onDelete} />
        </li >
    );
}
export { TodoItem };