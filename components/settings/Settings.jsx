import React, { useEffect, useState } from 'react';
import styles from '../../styles/settings/Settings.module.css';

// settings page for the app, mostly just to reset the items list (need to think more)
const SettingsScreen = () => {
    // TODO features to consider adding:
    // 1. reset all items
    // 2. reset all items and settings
    // 3. copy behaviour
    // 4. dark mode / light mode toggle
    // 5. syncing with google sync vs keeping it local
    // 6. exporting to a file

    const settingTexts = "Currently no settings, but I'm working on them! Some features you can expect are:";

    return (
        <div className={styles.container}>
            <p className={styles.title}>Settings</p>
            <p className={styles.text}>{settingTexts}</p>
            <ul className={styles.text}>
                <li className={styles.settingListItem}>Toggle: Dark mode / Light mode</li>
                <li className={styles.settingListItem}>Toggle: syncing with Google across browsers vs keeping it local</li>
                <li className={styles.settingListItem}>Feature: Exporting to a file</li>
                <li className={styles.settingListItem}>Feature: Reset all items / settings</li>

            </ul>
        </div>
    )
}

export default SettingsScreen;