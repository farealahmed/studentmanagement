import React, { useState, useEffect } from 'react';

//export const Todo = ({ t }) => <span>Id: {t.Id}</span>;

//export const TodoList = (p) => {
//    console.log(p.todos)
//    return p.todos.map(t => <Todo t={t} />);
//}

export const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await fetch('api/todo');
        const data = await response.json();
        console.log(data);
        setTodos(data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (<table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Is Complete</th>
                <th>Priority</th>
        </tr>
        </thead>
        <tbody>
            {todos.map(t =>
                <tr key={t}>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{t.isComplete.toString()}</td>
                    <td>{t.priority}</td>
                </tr>
            )}
        </tbody>
    </table>);
}