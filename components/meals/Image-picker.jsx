"use client";
import React, { useRef,useState } from 'react';
import styles from './Image-picker.module.css';
import Image from "next/image";

const ImagePicker = ({label,name}) => {
    const fileInputRef = useRef();
    const [pickedImage,setPickedImage] = useState(null)

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event)=>{
        const file=event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
        setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);

    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name} className={''}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>Please pick an image</p>}
                    {pickedImage && <Image src={String(pickedImage)} alt={'Picked Image'} fill/>}
                </div>
                <input
                    ref={fileInputRef}
                    className={styles.input}
                    type="file"
                    id={name}
                    accept={'image/png, image/jpeg'}
                    name={name}
                    onChange={handleImageChange}
                    required={true}
                />

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