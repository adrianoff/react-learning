import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyTextArea from "./UI/textarea/MyTextArea";
import App from "../App";

const Form = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            content
        }

        console.log(title)
        console.log(content)
    }

    return (
        <div>
            <form>
                <MyInput
                    onChange={e => setTitle(e.target.value)}
                    value={title} type="text" placeholder="Title"
                />
                <MyTextArea
                    onChange={e => setContent(e.target.value)}
                    value={content}
                    placeholder="Content"
                />
                <MyButton onClick={addNewPost}>Save</MyButton>
            </form>
        </div>
    );
};

export default Form;