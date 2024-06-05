import React from 'react'
import styles from '../../styles/home/Item.module.css'
import Link from 'next/link';
import { useState } from 'react';

const Item = (props) => {
    const [expanded, setExpanded] = useState(false);
    const copyToClipboard = async(text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.log("Error with copying text to clipboard")
        }
    };

    const expand = () => {
        if (!expanded) {
            setExpanded(true);
        }
    }
    
    const collapse = () => {
        if (expanded) {
            setExpanded(false);
        }
    }

    const deleteFromList = async(text) => {
        console.log(`Try deleting something: ${text}`)
    }

    const textThreshold = 35; // Max letters to display before cutting off with ...

    const shrunkItem = (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.buttonGroup}>
                    <img className={styles.button} src='images/clipboard.png' onClick={() => copyToClipboard(props.text)} />
                    <img className={styles.button} src='images/Menu.png' onClick={() => expand()} />
                </div>
            </div>
            <p className={styles.text}>{(props.text.length >= textThreshold ? props.text.substring(0, textThreshold) + "..." : props.text)}</p>
            <div className={styles.bottomLine}></div>
        </div>
    )

    const expandedItem = (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.buttonGroup}>
                    <img className={styles.button} src='images/clipboard.png' onClick={() => copyToClipboard(props.text)} />
                    <img className={styles.button} src='images/minimize.png' onClick={() => collapse()} />
                </div>
            </div>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.bottomLine}></div>
        </div>
    )

    return expanded ? expandedItem : shrunkItem;
};

export default Item;

/*
SAMPLE code for expand + shrink
import "./Chunk.css";
import CopyIcon from "../assets/CopyIcon.png";
import DeleteButton from "../assets/DeleteButton.png"
import React from "react";

const textThreshold = 20; // Max letters to display before cutting off with ...
const titleThreshold = 12; // Max ltters to display for the title

class Chunk extends React.Component {
    constructor(props) {
        super(props);
        this.handleShrink = this.handleShrink.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.state = {expanded: false}
    }

    handleShrink() {
        this.setState({expanded: false})
    }

    handleExpand() {
        this.setState({expanded: true})
    }

    render() {
        let title = this.props.title;
        let text = this.props.text;

        const characters = text.length;
        const words = text.split(" ").length;

        let expanded = this.state.expanded;

        const chunkToRender = (
            <div class="chunk">
                <div class="text-grouping">
                    <h1 class="title" onClick={this.handleExpand}>{(title.length >= titleThreshold ? title.substring(0, titleThreshold) + "..." : title)}</h1>
                    <p class="text">{(text.length >= textThreshold ? text.substring(0, textThreshold) + "..." : text)}</p>
                </div>
                <img class="copy-icon" src={CopyIcon}></img>
                <p class="text-stats"><b>{words}</b> words <b>{characters}</b> characters</p>
            </div>
        )

        const expandedChunkToRender = (
            <div class="chunk expanded">
                <div class="text-grouping">
                <h1 class="title" onClick={this.handleShrink}>{title}</h1>
                    <p class="text">{text}...</p>
                </div>
                <div class="chunk-buttons">
                    <img class="copy-icon" src={CopyIcon}></img>
                    <img class="delete-icon" src={DeleteButton}></img>
                </div>
                <p class="text-stats" style={{"margin-bottom": "6px"}}><b>{words}</b> words <b>{characters}</b> characters</p>
            </div>
        )

        return expanded ? expandedChunkToRender : chunkToRender;
    }
}

export default Chunk;

*/