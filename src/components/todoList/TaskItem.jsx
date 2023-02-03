import React from 'react';
import trash from '../../assets/trash.svg';
import styles from './TaskItem.module.css'

const TaskItem = (props) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.leftPart}>
                <input className={styles.checkTask} type="checkbox" id={props.task.id}/>
                <label className={styles.taskContent} htmlFor={props.task.id}>
                    {props.task.title}
                </label>
            </div>
            <button className={styles.deleteTask}><img src={trash} style={{width: 30, height: 30}}/></button>
        </div>
    );
};

export default TaskItem;