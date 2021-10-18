import React, { useState, Dispatch, SetStateAction } from 'react'
import { nanoid } from 'nanoid'

interface Props {
    database: TodoType[];
    setDatabase: Dispatch<SetStateAction<TodoType[]>>;
}
type TodoType = {
    id: string;
    data: string;
    isChecked: boolean;
}
const AddToDo: React.FC<Props> = ({ database, setDatabase }) => {
    const [newTodo, setNewTodo] = useState('');


    const savingNewTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setNewTodo(event.target.value)
    }

    const addTodoToDatabase = (event: React.MouseEvent<HTMLButtonElement>, newTodo: string) => {
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
                    style={{
                        backgroundColor: `${newTodo === '' ? 'lightgrey' : '#4e93bd'}`, color: 'white',
                        border: 'none',
                        fontSize: '13px',
                        padding: '12px',
                        marginLeft: '5px',
                        cursor: 'pointer'
                    }}
                    value='+'
                    onClick={(event) => addTodoToDatabase(event, newTodo)}
                    disabled={newTodo === '' ? true : false}
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
    }
}
export default AddToDo;
