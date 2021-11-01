import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [complete, setComplete] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a title');
            return;
        }

        onAdd({ title, text, date, time, complete });

        setTitle('');
        setText('');
        setDate('');
        setTime('');
        setComplete(false);
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Task title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Text</label>
                <input type='text' placeholder='Task description' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='15 Jun 2001' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='text' placeholder='2:15 PM' value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Complete</label>
                <input type='checkbox' value={complete} checked={complete} onChange={(e) => setComplete(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type='submit' value='Save' />
        </form>
    );
};

export default AddTask;
