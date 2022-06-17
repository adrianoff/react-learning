import React, {useRef, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Form = () => {

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <div>
            <form>
                <MyInput
                    onChange={e => setTitle(e.target.value)}
                    value={title} type="text" placeholder="Title"
                />
                <MyInput
                    ref={bodyInputRef}
                    type="text" placeholder="Content"
                />
                <MyButton onClick={addNewPost}>Save</MyButton>
            </form>
        </div>
    );
};

export default Form;