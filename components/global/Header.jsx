import React from 'react'
import styles from "../../styles/global/Header.module.css"

// header for home page (no back button in the top)
const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src='images/logo-W.png' />
        </div>
    )
};

export default Header;