import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggleComplete }) => {
    return (
        <div className={`task ${(task.complete) ? 'complete' : ''}`} onDoubleClick={() => toggleComplete(task.id)}>
            <h3>
                {task.title}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.text}</p>
            <p>{task.date} {task.time}</p>
        </div>
    );
}

export default Task;
