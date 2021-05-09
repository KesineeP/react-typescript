import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1}>TODO LIST</h1>
      <TodoList />
    </div>
  );
}

const styles = {
  h1: {
    fontSize: '25px',
    color: 'white',
    textShadow: '2px 2px 5px grey'
  }
}

export default App;
