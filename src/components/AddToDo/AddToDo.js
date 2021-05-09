import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function AddToDo({ database, setDatabase }) {
    const [newTodo, setNewTodo] = useState('');


    const savingNewTodo = (event) => {
        event.persist()
        setNewTodo(event.target.value)
    }
    //set input to emty/placeholder

    const addTodoToDatabase = (event, newTodo) => {
        event.preventDefault()
        setDatabase([...database, { id: nanoid(), data: newTodo, isChecked: false }])
        setNewTodo('');
    }


    console.log('newTodo', newTodo);
    console.log('database', database);
    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <input
                    value={newTodo}
                    style={styles.textInput}
                    type='textbox'
                    placeholder='What needs to be done?'
                    onChange={(event) => savingNewTodo(event)}
                />
                <button
                    style={styles.addButton}
                    value='+'
                    onClick={(event) => addTodoToDatabase(event, newTodo)}
                >
                    <i className="fas fa-plus" />
                </button>
            </form>
        </div>
    )
}
const styles = {
    container: {
        width: '100%',
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    textInput: {
        fontSize: '16px',
        width: '240px',
        paddingLeft: '10px',
        border: 'solid 2px powderblue',
        outline: 'none'
    },
    addButton: {
        color: 'white',
        backgroundColor: '#4e93bd',
        border: 'none',
        fontSize: '13px',
        padding: '12px',
        marginLeft: '5px',
        cursor: 'pointer'
    }
}
export default AddToDo;
