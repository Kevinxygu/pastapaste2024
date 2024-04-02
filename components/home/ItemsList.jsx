import React from 'react'
import styles from '../../styles/home/ItemsList.module.css'
import JSONData from '../../assets/example/data.json'
import Item from './Item.jsx';

const ItemsList = () => {
    const JSONList = JSONData.chunks;
    console.log("Here is the current list");
    console.log(JSONList);

    return (
        <div className={styles.container}>
            <p>The items will go here</p>
            {JSONList.map((object, index) => {
                return <Item key={index} title={object.title} text={object.text} />
            })}
        </div>
    )
};

export default ItemsList;