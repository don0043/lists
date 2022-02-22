import React from 'react';

const Todos = ({tasks, remove}) => {
    return (
        <div className="tasks" onClick={() => {}}>
            <p>{tasks.message}</p>
            <button onClick={() => remove(tasks.id)}>del</button>
        </div>
    );
};

export default Todos;
