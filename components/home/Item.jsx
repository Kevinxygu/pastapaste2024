import React from 'react'
import styles from '../../styles/home/Item.module.css'
import Link from 'next/link';
import { useState } from 'react';

const Item = ({key, title, text, reloadItems}) => {
    const [expanded, setExpanded] = useState(false);
    const copyToClipboard = async(text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.log("Error with copying text to clipboard")
        }
    };

    const expand = () => {
        if (!expanded) {
            setExpanded(true);
        }
    }
    
    const collapse = () => {
        if (expanded) {
            setExpanded(false);
        }
    }

    const deleteFromList = () => {
        console.log(key);

    }

    const textThreshold = 35; // Max letters to display before cutting off with ...

    const shrunkItem = (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.buttonGroup}>
                    <img className={styles.button} src='images/clipboard.png' onClick={() => copyToClipboard(text)} />
                    <img className={styles.button} src='images/Menu.png' onClick={() => expand()} />
                </div>
            </div>
            <p className={styles.text}>{(text.length >= textThreshold ? text.substring(0, textThreshold) + "..." : text)}</p>
            <div className={styles.bottomLine}></div>
        </div>
    )

    const expandedItem = (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.buttonGroup}>
                    <img className={styles.button} src='images/clipboard.png' onClick={() => copyToClipboard(text)} />
                    <img className={styles.button} src='images/minimize.png' onClick={() => collapse()} />
                    <img className={styles.button} src='images/x.png' onClick={() => deleteFromList()} />
                </div>
            </div>
            <p className={styles.text}>{text}</p>
            <div className={styles.bottomLine}></div>
        </div>
    )

    return expanded ? expandedItem : shrunkItem;
};

export default Item;