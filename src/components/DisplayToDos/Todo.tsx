import React, { useState, Dispatch, SetStateAction } from 'react'
// import CSS from 'csstype';
interface Props {
    database: TodoType[];
    setDatabase: Dispatch<SetStateAction<TodoType[]>>;
    todo: any;
};

export type TodoType = {
    id: string;
    data: string;
    isChecked: boolean;
}


const Todo: React.FC<Props> = ({ todo, database, setDatabase }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleDeleteTodo = (id: string) => {
        //delete this todo that clicked
        //setDatabase will exclude this todo
        const newDatabase = database.filter((todo: TodoType) => (todo.id !== id));
        setDatabase(newDatabase);
        //{id: kfsfkls, data: make rice, isCheck: false} !== kfsfkls

    }
    console.log(todo);
    // user click checkbox 
    // if checkbox is unchecked switch isChecked to false, textDecoration is none
    // if checkbox is checked switch isChecked to true and change textDecoration to 
    // line-throught
    const handleChangeCheckbox = () => {
        // const copyDatabase = [...database];
        // for(let i = 0; i < copyDatabase.length; i++) {
        //     if(copyDatabase[i].id === todo.id) {
        //         copyDatabase[i].isChecked = !copyDatabase[i].isChecked;
        //     }
        // } 
        // console.log('copyDatabase', copyDatabase)
        // setDatabase(copyDatabase)
        const newDatabase = database.map(databaseTodo => { //databaseTodo is element in database[]
            if (databaseTodo.id === todo.id) {
                databaseTodo.isChecked = !databaseTodo.isChecked
            }
            return databaseTodo
        })
        setDatabase(newDatabase)
    }
    // console.log('database', database)

    // user click edit icon, change <p></p> to input textbox DONE
    // user type in textbox, change value in database DONE
    // user press Enter, change input textbox to <p></p>

    const handleOnClickEdit = () => {
        setIsEdit(true);
    }

    const handleChangeTodoData = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const newData = event.target.value;
        const copyDatabase = [...database];
        let newDatabase = [];
        for (let i = 0; i < copyDatabase.length; i++) {
            if (copyDatabase[i].id === id) {
                copyDatabase[i].data = newData;
            }
            newDatabase.push(copyDatabase[i]);
        }
        console.log("newData1", newDatabase);
        setDatabase(newDatabase)
    }
    const handlePressEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") setIsEdit(false)
    }


    return (
        <div style={styles.container}>
            <div style={styles.list}>
                <input
                    style={{ margin: '0', cursor: 'pointer' }}
                    type='checkbox'
                    checked={todo.isChecked}
                    onChange={() => handleChangeCheckbox()} />
                {isEdit ?
                    <input
                        style={styles.textbox}
                        type="textbox"
                        value={todo.data}
                        onChange={(event) => handleChangeTodoData(event, todo.id)}
                        onKeyDown={(event) => handlePressEnterKey(event)} />
                    :
                    <div style={styles.p}>
                        <p style={{ textDecoration: todo.isChecked === true ? 'line-through' : 'none' }}>{todo.data}</p>
                    </div>
                }
            </div>
            <div>
                <button style={styles.button} onClick={() => handleOnClickEdit()}>
                    <i className="fas fa-pencil-alt" />
                </button>
                <button style={styles.button} onClick={() => handleDeleteTodo(todo.id)}>
                    <i className="far fa-trash-alt" />
                </button>
            </div>
        </div>

    )
}
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: 'solid lightgrey 1px'
    },
    list: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        border: 'none',
        color: '#878e91',
        backgroundColor: '#9fddddb5',
        borderRadius: '5px',
        fontSize: '20px',
        margin: '2px',
        padding: '5px',
        cursor: 'pointer',
        width: '30px'
    },
    p: {
        paddingLeft: '10px',
        fontSize: '16px'
    },
    textbox: {
        marginLeft: '10px',

    }
}
export default Todo;
