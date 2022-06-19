import React, {useState} from "react";
import Counter from "./Components/Counter";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post title', body: 'Post body'},
        {id: 2, title: 'Post title', body: 'Post body'},
        {id: 3, title: 'Post title', body: 'Post body'}
    ])

    return (
        <div className="App">
            <Form />
            <PostList posts={posts} title="Posts List" />

            {/*<Counter/>*/}
        </div>
    );
}

export default App;
