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
        {id: 2, title: 'Post title', content: 'Post body'},
        {id: 1, title: 'Post title', content: 'Post body'},
        {id: 3, title: 'Post title', content: 'Post body'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <Form create={createPost} />
            <PostList posts={posts} title="Posts List" />

            {/*<Counter/>*/}
        </div>
    );
}

export default App;
