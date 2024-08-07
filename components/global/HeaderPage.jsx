// header for info/settings page where you need to return back to the home page
import React from 'react'
import styles from "../../styles/global/HeaderPage.module.css"
import Link from 'next/link';

// header for side pages (info.js and settings.js), has a back button in the top to navigate back to home
const HeaderPage = () => {
    return (
        <div className={styles.container}>
            <Link href="./index.html">
            <div className={styles.backButtonContainer}>
                <img className={styles.backButton} src='images/backArrow.png' />
            </div>
            </Link>
            <img className={styles.logo} src='images/logo-W.png' />
        </div>
    )
};

export default HeaderPage;