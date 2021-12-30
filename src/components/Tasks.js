import Task from "./Task";

// const Task = ({ task }) => {
//     return (
//         <div>
//             <h3> { task.text} <FaTimes style ={{ color: 'red', cursor: 'pointer' }} /> </h3>
//             <p> { task.day}</p>
//         </div>
//     )
// }

const Tasks = ({ tasks, onDelete, onToggle }) => {

    const renderedList = tasks.map((task, index) => (
        <Task 
            key={index} 
            task= {task}
            onDelete = {onDelete}
            onToggle={onToggle}
        />
    ));

    // we will do this kind of stuff a lot
    // setTask([...task, { ... } ]);
    return (
        <div>
            { renderedList }
        </div>
    );

};


export default Tasks;