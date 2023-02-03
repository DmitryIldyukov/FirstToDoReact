import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/rocket.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <img src={logo} />
                <div className={styles.logo}>
                    <span className={styles.leftPart}>to</span>
                    <span className={styles.rightPart}>do</span>
                </div>
            </div>
        </div>
    );
};

export default Header;