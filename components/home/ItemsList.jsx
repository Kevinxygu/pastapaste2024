import React, { useEffect, useState } from 'react';
import styles from '../../styles/home/ItemsList.module.css';
import Item from './Item.jsx';

// main page. has the search bar to view the list of items, and hosts the list of items from localStorage
const ItemsList = ({ reloadItems, handleReloadItems }) => {
    const localStorageKey = "test123";
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    // reload the items from localStorage
    useEffect(() => {
        // read the values from localStorage
        const JSONList = JSON.parse(localStorage.getItem(localStorageKey));
        if (JSONList) {
            setItems(JSONList);
            setFilteredItems(JSONList); // initialize filteredItems with the complete list
        }
    }, [reloadItems]);

    // useEffect to render filtered Text
    useEffect(() => {
        if (filterText === "") {
            setFilteredItems(items);
        } else {
            setFilteredItems(
                items.filter(
                    item => 
                        item.title.toLowerCase().includes(filterText.toLowerCase()) || 
                        item.text.toLowerCase().includes(filterText.toLowerCase())
                )
            );
        }
    }, [filterText, items]);

    // Function to delete an item from the list
    const deleteFromList = (title, text, index) => {
        // testing
        // console.log(title);
        // console.log(text);
        const updatedItems = items.filter((item, idx) => idx !== index);
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));
        handleReloadItems();
    };

    // JSX for when there are no items in the list (includes the flushed face)
    const itemsListEmpty = (
        <div className={styles.outerContainer}>
            <img src="images/flushed.png" alt="flushed emoji" className={styles.emoji} />
            <p className={styles.message}>There isn’t anything here…</p>
            <p className={styles.subMessage}>Click here to add a new chunk of text!</p>
            <img src="images/squigglyArrow.png" alt="squiggly arrow" className={styles.arrow} />
        </div>
    )

    // JSX for when there are items in the list
    const itemsListWithItems = (
        <div className={styles.outerContainer}>
            <div className={styles.searchContainer}>
                <input 
                    className={styles.searchBox} 
                    type="text" 
                    name="filter-items" 
                    placeholder="search for copied blocks..." 
                    maxLength="70" 
                    value={filterText} 
                    onChange={e => setFilterText(e.target.value)} 
                />
                <img className={styles.searchIcon} src='images/searchIcon.png' />
            </div>            
            <div className={styles.container}>
                {filteredItems.map((object, index) => {
                    return <Item key={index} index={index} title={object.title} text={object.text} deleteFromList={deleteFromList} />
                })}
            </div>
        </div>
    )

    // return the JSX based on whether there are items in the list or not
    if (items.length === 0) {
        return itemsListEmpty;
    } else {
        return itemsListWithItems;
    }
};

export default ItemsList;
