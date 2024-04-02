import React from 'react'
import styles from "../../styles/global/Footer.module.css"
import Link from 'next/link'

// header for home page (no back button in the top)
const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href="./info.html">Info</Link>
            <button>+</button>
            <Link href="./settings.html">Settings</Link>
        </div>
    )
};

export default Footer;