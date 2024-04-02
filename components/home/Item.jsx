import React from 'react'
import styles from '../../styles/home/Item.module.css'

const Item = (props) => {
    const copyToClipboard = async(text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.log("Error with copying text to clipboard")
        }
    };

    return (
        <div className={styles.container}>
            <p>HELLO WORLD! I am a chunk</p>
            <p>{props.title}</p>
            <p>{props.text}</p>
            <button onClick={() => copyToClipboard(props.text)}>Copy</button>
        </div>
    );
};

export default Item;