import React from 'react'
import styles from '../../../styles/home/addnew/AddNewForm.module.css'
import { useState } from 'react';

const AddNewForm = ({visible, onHide}) => {
    return (
        <div className={`${styles.container} ${visible ? styles.visibleContainer : ""}`}>
            <p>Hi add a new form</p>
            <button onClick={onHide}>Hide</button>
        </div>
    )
};

export default AddNewForm;