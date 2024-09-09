import React, { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);

    const addTodo = () => {
        if (todo.trim() !== '') {
            setList([...list, todo])
            setTodo('');

        }
    }

    const remove = (index) => {
        const remove = list.filter((_, i) => i !== index);
        setList(remove);

    }
    return (
        <div>
            <input type="text" onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <ul>
                {list.map((list, index) => (
                    <li key={list.index}>{list}
                        <button onClick={() => remove(index)}>Remove</button>
                    </li>
                ))}

            </ul>

        </div>
    );
};

export default TodoList;