import React from 'react';
import styles from './MyButton.module.css';
import plus from "../assets/plus.svg";

const MyButton = (props) => {
    return (
        <button className={styles.btn}>
            {props.children}
            <img src={plus} style={{marginLeft: 8}}/>
        </button>
    );
};

export default MyButton;