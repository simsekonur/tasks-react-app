import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle}) => {
    //console.log(onToggle);
    const textStyle = task.reminder ? { color: 'green' } : { color: 'red' }
    return (
        <div onDoubleClick={() => onToggle(task.id) }>
            <h3 style={textStyle}> { task.text} <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id) } />
            </h3>
            <p> { task.day}</p>
        </div>
    )
}

export default Task;
