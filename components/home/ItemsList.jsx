import React, { useEffect, useState } from 'react';
import styles from '../../styles/home/ItemsList.module.css';
import Item from './Item.jsx';

const ItemsList = ({ reloadItems, handleReloadItems }) => {
    const localStorageKey = "test123";
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // read the values from localStorage
        const JSONList = JSON.parse(localStorage.getItem(localStorageKey));
        if (JSONList) {
            setItems(JSONList);
            setFilteredItems(JSONList); // initialize filteredItems with the complete list
        }
    }, [reloadItems]);

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

    const deleteFromList = (title, text, index) => {
        // testing
        console.log(title);
        console.log(text);
        const updatedItems = items.filter((item, idx) => idx !== index);
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));
        handleReloadItems();
    };

    return (
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
    );
};

export default ItemsList;
