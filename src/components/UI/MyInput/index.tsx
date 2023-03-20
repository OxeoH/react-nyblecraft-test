import React from 'react';
import styles from './MyInput.module.scss'
export const MyInput: React.FC<any> = ({props}) => {
    return (
        <input {...props} className={styles.input}/>
    );
};