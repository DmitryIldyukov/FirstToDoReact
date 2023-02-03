import React, {useState} from 'react';
import styles from './TodoList.module.css';
import TaskItem from "./TaskItem";
import MyButton from "../../UI/MyButton";

const TodoList = () => {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'Один дурачок сидит и делает это в час ночи, а мог бы спать', body: 'description'},
        {id: 2, title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', body: 'description'},
        {id: 3, title: 'Три', body: 'description'},
        {id: 4, title: 'Четыре', body: 'description'},
        {id: 5, title: 'Один', body: 'description'},
        {id: 6, title: 'Два', body: 'description'},
        {id: 7, title: 'Три', body: 'description'},
        {id: 8, title: 'Четыре', body: 'description'}
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