import React, {useState} from "react";
import styles from './App.module.css';
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header />
                <TodoList />
            </div>
        </div>
    );
}

export default App;