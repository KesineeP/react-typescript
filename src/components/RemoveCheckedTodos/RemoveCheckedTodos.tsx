import React, { Dispatch, SetStateAction } from 'react';
import CSS from 'csstype';

interface Props {
    database: TodoType[];
    setDatabase: Dispatch<SetStateAction<TodoType[]>>;
}
type TodoType = {
    id: string;
    data: string;
    isChecked: boolean;
}
const RemoveCheckedTodos: React.FC<Props> = ({ database, setDatabase }) => {
    // user click "Remove Checked" button
    // check isChecked === true
    // remove todo that isChecked === true 
    const handleRemoveAllChecked = () => {
        const filteredTodos = database.filter((todo: TodoType) => !todo.isChecked);
        setDatabase(filteredTodos);
    }
    console.log(database);
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={() => handleRemoveAllChecked()}>
                <p style={styles.p}>Remove Checked Tasks</p>
                <i className="fas fa-times" />
            </button>
        </div >
    )
}
type StyleType = {
    container: CSS.Properties;
    button: CSS.Properties;
    p: CSS.Properties;
}

const styles: StyleType = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '20px',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: '#4e93bd',
        border: 'none',
        cursor: 'pointer'
    },
    p: {
        margin: '0',
        paddingRight: '10px'
    }
}
export default RemoveCheckedTodos;