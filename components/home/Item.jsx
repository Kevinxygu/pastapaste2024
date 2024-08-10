import React from 'react';
import styles from '../../styles/home/Item.module.css';
import { useState } from 'react';

// A singular item to copy and paste inside app. Iterated over via ItemsList
const Item = ({index, title, text, deleteFromList}) => {
    const [expanded, setExpanded] = useState(false);

    // Function to take the current Item's text, and copy it to clipboard
    const copyToClipboard = async(text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.log("Error with copying text to clipboard");
        }
    };

    // Function: to expand the item from its truncated view into the larger view, which shows the entire text
    const expand = () => {
        if (!expanded) {
            setExpanded(true);
        }
    };

    // Function: to expand the item from its larger view into the truncated view, which shortens the text to copy/paste
    const collapse = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    // Max letters to display before cutting off with ...
    const textThreshold = 35;

    // This is the react component which renders when the item should be truncated/shrunk
    // This is the DEFAULT VIEW
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
    );

    // This is the react component which renders when the item should be completely expanded.
    const expandedItem = (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.buttonGroup}>
                    <img className={styles.button} src='images/clipboard.png' onClick={() => copyToClipboard(text)} />
                    <img className={styles.button} src='images/x.png' onClick={() => deleteFromList(title, text, index)} />
                    <img className={styles.button} src='images/minimize.png' onClick={() => collapse()} />                
                </div>
            </div>
            <p className={styles.text}>{text}</p>
            <div className={styles.bottomLine}></div>
        </div>
    );

    // Based on the state, render expanded item or the shrunk/truncated version
    return expanded ? expandedItem : shrunkItem;
};

export default Item;
