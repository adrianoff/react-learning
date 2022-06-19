import React from 'react';
import classes from "./MyTextArea.module.css";

const MyTextArea = (props) => {
    return (
        <textarea className={classes.myTextArea} {...props} />
    );
};

export default MyTextArea;