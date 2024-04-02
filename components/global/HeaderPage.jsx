// header for info/settings page where you need to return back to the home page
import React from 'react'
import styles from "../../styles/global/HeaderPage.module.css"
import Link from 'next/link';

const HeaderPage = () => {
    return (
        <div className={styles.container}>
            <Link href="./index.html"><p>Logo Page</p></Link>
        </div>
    )
};

export default HeaderPage;