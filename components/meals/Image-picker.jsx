"use client";
import React, { useRef } from 'react';
import styles from './Image-picker.module.css';

const ImagePicker = ({label,name}) => {
    const fileInputRef = useRef();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name} className={''}>{label}</label>
            <div className={styles.controls}>
                <input
                    ref={fileInputRef}
                    className={styles.input}
                    type="file"
                    id={name}
                    accept={'image/png, image/jpeg'}
                    name={name}/>
            </div>
            <button
                className={styles.button}
                type={'button'}
                onClick={handleButtonClick}>
                Pick an image
            </button>
        </div>
    );
};

export default ImagePicker;