import React from 'react'
import styles from '../../styles/home/ItemsList.module.css'
import Item from './Item.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

// const magnifyingIcon = chrome.runtime.getURL('assets/images/VectorMagnifying.png');
// itemsList is the main page
// comment 2
const ItemsList = ({reloadItems, handleReloadItems}) => {
    const localStorageKey = "test123";
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState("");
    // const [reloadItems, setReloadItems] = useState(0); // use this to track when we need to reload the list

    // const JSONList = JSON.parse(localStorage.getItem(localStorageKey)); // 1. define the state here
    useEffect(() => {
        // read the values from localStorage (didn't work when we defined it above as a const)
        const JSONList = JSON.parse(localStorage.getItem(localStorageKey));
        if (JSONList) {
            setItems(JSONList);
        }
    }, [reloadItems]); // use this dependency array

    const reloadList = () => {
        const JSONList = JSON.parse(localStorage.getItem(localStorageKey));
        if (JSONList) {
            setItems(JSONList);
        }
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.searchContainer}>
                <input className={styles.searchBox}type="text" name="filter-items" placeholder="search for copied blocks..." maxLength="70" value={filterText} onChange={e => setFilterText(e.target.value)} />
                <img className={styles.searchIcon} src='images/searchIcon.png' />
            </div>            
            <div className={styles.container}>            {items.map((object, index) => {
                return <Item key={index} title={object.title} text={object.text} />
            })}
            </div>
        </div>
    )
};

export default ItemsList;