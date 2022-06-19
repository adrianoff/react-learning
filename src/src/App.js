import React, {useState} from "react";
import Counter from "./Components/Counter";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";
import MyInput from "./Components/UI/input/MyInput";
import MyTextArea from "./Components/UI/textarea/MyTextArea";
import MyButton from "./Components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post title', body: 'Post body'},
        {id: 2, title: 'Post title', body: 'Post body'},
        {id: 3, title: 'Post title', body: 'Post body'}
    ])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            content
        }
        setPosts([...posts, newPost])
        setTitle('')
        setContent('')
    }

    return (
        <div className="App">
            {/*<Form />*/}
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
            <PostList posts={posts} title="Posts List" />

            {/*<Counter/>*/}
        </div>
    );
}

export default App;
