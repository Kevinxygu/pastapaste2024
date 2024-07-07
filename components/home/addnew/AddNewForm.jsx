/*chrome*/
import React from 'react'
import styles from '../../../styles/home/addnew/AddNewForm.module.css'
import { useState } from 'react';
import JSONData from '../../../assets/example/data.json';

// the form to add a new item, which is hidden below the footer and pops up when button is clicked
const AddNewForm = ({handleReloadItems, visible, onHide}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const makeNew = () => {
        // chrome.storage.local.set({localStorageKey: "something"})
        // .then(() => chrome.storage.local.get([localStorageKey]))
        // .then(result => alert(result)).catch(error => console.log(error));

        // try {
        //     await chrome.storage.local.set({test123: "try something"});
        //     const result = await chrome.storage.local.get(['test123']);
        //     alert("result");
        // } catch(error) {
        //     alert(error)
        // }

        // localStorage.setItem("newChunk", JSON.stringify({"title": title, "text": text}));

        const localStorageKey = "test123";

        // chrome.storage.local.get(["test123"], function(result) {
        //     const existingChunks = result[localStorageKey] ? result[localStorageKey].chunks : [];

        //     // Append a new chunk
        //     const newChunk = {"title": title, "text": text};
        //     const updated = [...existingChunks, newChunk];

        //     // save the updated chunks
        //     chrome.storage.local.set({[localStorageKey]: {chunks: updated}}, function() {
        //         console.log("Successfully added a new chunk");
        //     });
        // });

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
        // chrome.storage.local.set({"123": 50}).then(() => {alert("The value is now set");});
        alert(`Originally it was ${existingValues} and now it is ${localStorage.getItem(localStorageKey)}`);
        // // setTimeout(function() {
        // //     console.log("Sleeping now")
        // // }, 2000);

        // // stuck on chrome.storage.local part. need to re-try and work on it!
        // chrome.storage.local.get(["test123"]).then((result) => {console.log("Value is " + result["test123"]);});
        // const testItemRetrieval = localStorage.getItem("newChunk");
        // alert("The value we stored is " + testItemRetrieval);
        handleReloadItems();
    }


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