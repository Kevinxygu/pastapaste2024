import React from 'react'
import styles from "../../styles/global/Footer.module.css"
import Link from 'next/link'
import { useState } from 'react';
import AddNewForm from '../home/addnew/addnewform';

// header for home page (no back button in the top)
const Footer = ({handleReloadItems}) => {
    const [addScreenVisible, setAddScreenVisible] = useState(false)
    return (
        <div className={styles.container}>
            <Link href="./info.html">Info</Link>
            <button className={styles.addButton} onClick={() => setAddScreenVisible(true)}>+</button>
            <AddNewForm handleReloadItems={handleReloadItems} visible={addScreenVisible} onHide={() => setAddScreenVisible(false)} />            
            <Link href="./settings.html">Settings</Link>
        </div>
    )
};

export default Footer;