/*chrome*/
import React from 'react'
import styles from '../../../styles/home/addnew/AddNewForm.module.css'
import { useState } from 'react';
import JSONData from '../../../assets/example/data.json';

// the form to add a new item, which is hidden below the footer and pops up when button is clicked
const AddNewForm = ({handleReloadItems, visible, onHide}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // Function: make a new storageKeyValue and add it to localStorage
    const makeNew = () => {
        const localStorageKey = "test123";

        // get existing list of localStorageValues
        const existingValues = localStorage.getItem(localStorageKey);
        const newObjectToAdd = {"title": title, "text": text};
        if (!existingValues) {
            const newJSONStr = JSON.stringify([newObjectToAdd]);
            localStorage.setItem(localStorageKey, newJSONStr);
        } else {
            const existingJSONArr = JSON.parse(existingValues);
            existingJSONArr.push(newObjectToAdd);
            localStorage.setItem(localStorageKey, JSON.stringify(existingJSONArr));
        }

        // Old testing code for chrome storage sync
        // TODO need to refactor the overall code to use Chrome.sync as the main storage method
        // const CHROME_STORAGE_TEST = "hello";
        // chrome.storage.sync.set({ [CHROME_STORAGE_TEST]: "Hello World!" }, () => {
        //     chrome.storage.sync.get([CHROME_STORAGE_TEST], (result) => {
        //         console.log(result[CHROME_STORAGE_TEST]);
        //     });
        // });   

        // Reload all the items to get the newest value
        handleReloadItems();

        // Hide the form from view
        onHide();

        // Reset the form fields
        setTitle("");
        setText("");
    }

    // Component to render
    return (
        <div className={`${styles.container} ${visible ? styles.visibleContainer : ""}`}>
            <input type="text" className={styles.titleInput} name="create-title" placeholder="Title" maxLength="30" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Type something you'd like to keep copying and pasting!" className={styles.createText} value={text} onChange={e => setText(e.target.value)} />
            <button className={styles.addButton} onClick={makeNew}>Add</button>
            <img src='images/x.png' className={styles.backButton} onClick={onHide} />
        </div>
    )
};

export default AddNewForm;