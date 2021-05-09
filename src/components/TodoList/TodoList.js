import React, { useState, useEffect } from 'react';
import AddToDo from '../AddToDo';
import DisplayToDos from '../DisplayToDos';
import RemoveCheckedTodos from '../RemoveCheckedTodos';

// click delete button
// that todo will be removed from todo list(database)
function TodoList() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        const database = JSON.parse(localStorage.getItem('database'));
        if (database) {
            setDatabase(database);
        }
    }, [])

    useEffect(() => {
        //save database while changing
        localStorage.setItem('database', JSON.stringify(database));
    }, [database]);

    const today = new Date();
    const displayDate = today.toDateString();


    return (
        <div style={styles.container}>
            <h5>{displayDate}</h5>
            <AddToDo database={database} setDatabase={setDatabase} />
            <DisplayToDos database={database} setDatabase={setDatabase} />
            <RemoveCheckedTodos database={database} setDatabase={setDatabase} />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: ' 5px 20px 20px 20px',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        fontSize: '',
        maxWidth: '450px',

    }
}

export default TodoList;

