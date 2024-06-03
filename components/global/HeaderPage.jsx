// header for info/settings page where you need to return back to the home page
import React from 'react'
import styles from "../../styles/global/HeaderPage.module.css"
import Link from 'next/link';

const HeaderPage = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src='images/logo-W.png' />
            <Link href="./index.html"><img className={styles.backButton} src='images/backArrow.png' /></Link>
        </div>
    )
};

export default HeaderPage;