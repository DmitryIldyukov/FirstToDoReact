import React from 'react';
import styles from "../todoList/TodoList.module.css";
import plus from "../../assets/plus.svg";
import MyButton from "../../UI/MyButton";

const FormComponent = () => {
    return (
        <form>
            <input type="text" placeholder="Название задачи"/>
            <input type="text" placeholder="Описание задачи"/>
            <MyButton>Добавить</MyButton>
        </form>
    );
};

export default FormComponent;