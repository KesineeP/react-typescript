import React, { Dispatch, SetStateAction } from 'react';
import Todo from './Todo';
import { TodoType } from './Todo';
import CSS from 'csstype'

interface Props {
    database: TodoType[];
    setDatabase: Dispatch<SetStateAction<TodoType[]>>;
};

const DisplayToDos: React.FC<Props> = ({ database, setDatabase }) => {
    return (
        <div style={styles.container}>
            {database.map((item, index) => <Todo todo={item} key={index} database={database} setDatabase={setDatabase} />)}
        </div>
    )
}
type Style = {
    container: CSS.Properties;
}
const styles: Style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}
export default DisplayToDos
