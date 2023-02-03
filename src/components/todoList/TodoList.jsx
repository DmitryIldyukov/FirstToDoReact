import React, {useState} from 'react';
import plus from '../../assets/plus.svg';
import styles from './TodoList.module.css';
import TaskItem from "./TaskItem";
import MyButton from "../../UI/MyButton";

const TodoList = () => {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'Один', body: 'description'},
        {id: 2, title: 'Два', body: 'description'},
        {id: 3, title: 'Три', body: 'description'},
        {id: 4, title: 'Четыре', body: 'description'}
    ])

    return (
        <div className={styles.todoList}>
            <div className={styles.topInfo}>
                <div className={styles.numberOfTasks}>
                    Всего задач <span>{tasks.length}</span>
                </div>
                <div className={styles.completedTasks}>
                    Выполнено
                </div>
            </div>
            <div className={styles.tasksList}>
                {tasks.map(task =>
                    <TaskItem task={task} key={task.id}/>
                )}
            </div>
            <MyButton>Добавить задачу</MyButton>
        </div>
    );
};

export default TodoList;