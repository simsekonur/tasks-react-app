import { useState } from "react";
const AddTask = ({ onSave }) => {

    let [text, setText] = useState('');
    let [day, setDay] = useState('');
    let [reminder, setReminder] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can have some validations here
        if (!text) {
            alert('Please add a task');
            return 
        }

        onSave({text, day, reminder});
        // clear everything up
        setDay('');
        setText('');
        setReminder(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}    
                />
            </div>
            <div>
                <label>Day & Time</label>
                <input 
                    type="text"
                    placeholder="Add day & time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}   
                />
            </div>
            <div>
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input type="submit" value='Save Task'/>            

        </form>
    )
}

export default AddTask
