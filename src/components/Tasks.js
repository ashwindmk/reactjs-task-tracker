import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleComplete }) => {
    return (
        <>
            {
                tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task} onDelete={onDelete} toggleComplete={toggleComplete} />
                    );
                })
            }
        </>
    );
}

export default Tasks;
