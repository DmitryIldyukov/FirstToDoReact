import React from 'react';
import styles from "../todoList/TodoList.module.css";
import plus from "../../assets/plus.svg";

const FormComponent = () => {
    return (
        <form>
            <input type="text" placeholder="Название задачи"/>
            <input type="text" placeholder="Описание задачи"/>
            <button className={styles.btn}>Добавить задачу <img src={plus} style={{marginLeft: 8}}/></button>
        </form>
    );
};

export default FormComponent;