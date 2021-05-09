import React from 'react';

function RemoveCheckedTodos({ database, setDatabase }) {
    // user click "Remove Checked" button
    // check isChecked === true
    // remove todo that isChecked === true 
    const handleRemoveAllChecked = () => {
        const filteredTodos = database.filter(todo => !todo.isChecked);
        setDatabase(filteredTodos);
    }
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={() => handleRemoveAllChecked()}>
                <p style={styles.p}>Remove Checked Tasks</p>
                <i className="fas fa-times" />
            </button>
        </div >
    )
}

const styles = {
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