import React from 'react'
import styles from "../../styles/global/Footer.module.css"
import Link from 'next/link'
import { useState } from 'react';
import AddNewForm from '../home/addnew/AddNewForm';

// footer for page, that's on every page.
// Has a button that triggers the new form to add a new item
const Footer = ({handleReloadItems}) => {
    const [addScreenVisible, setAddScreenVisible] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.sideLinkContainer}>
                <Link href="./info.html"><img className={styles.sideLink} src='images/info.png' /></Link>
            </div>
            <button className={styles.addButton} onClick={() => setAddScreenVisible(true)}>+</button>
            <AddNewForm handleReloadItems={handleReloadItems} visible={addScreenVisible} onHide={() => setAddScreenVisible(false)} />            
            <div className={styles.sideLinkContainer}>
                <Link href="./settings.html"><img className={styles.sideLink} src='images/settings.png' /></Link>
            </div>
        </div>
    )
};

export default Footer;