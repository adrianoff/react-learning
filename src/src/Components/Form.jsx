import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Form = () => {
    return (
        <div>
            <form>
                <MyInput type="text" placeholder="Title"/>
                <MyInput type="text" placeholder="Content"/>
                <MyButton disabled>Save</MyButton>
            </form>
        </div>
    );
};

export default Form;