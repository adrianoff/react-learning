import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyTextArea from "./UI/textarea/MyTextArea";
import App from "../App";

const Form = ({create}) => {

    const [post, setPost] = useState({title: '', content: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', content: ''})
    }

    return (
        <form>
            <MyInput
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title} type="text" placeholder="Title"
            />
            <MyTextArea
                onChange={e => setPost({...post, content: e.target.value})}
                value={post.content}
                placeholder="Content"
            />
            <MyButton onClick={addNewPost}>Save</MyButton>
        </form>
    );
};

export default Form;