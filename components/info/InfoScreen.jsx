import React, { useEffect, useState } from 'react';
import styles from '../../styles/info/Info.module.css';

// settings page for the app, mostly just to reset the items list (need to think more)
const InfoScreen = () => {
    // TODO features to consider adding:
    // 1. reset all items
    // 2. reset all items and settings
    // 3. copy behaviour
    // 4. dark mode / light mode toggle
    // 5. syncing with google sync vs keeping it local
    // 6. exporting to a file

    const InfoText = "PastaPaste is a clipboard Chrome extension to store text for ultimate convenience. Add a new item with the big red button below!";

    return (
        <div className={styles.container}>
            <p className={styles.title}>Info</p>
            <p className={styles.text}>{InfoText}</p>
            <p className={styles.text}>The link to the GitHub repository <a className={styles.link} href="https://github.com/Kevinxygu/pastapaste2024" target="_blank" rel="noopener noreferrer">is here</a></p>
        </div>
    )
}

export default InfoScreen;