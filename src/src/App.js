import React, {useState} from "react";
import Counter from "./Components/Counter";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";

function App() {
    const [value, setValue] = useState('Some text');

    const [posts, setPosts] = useState([
        {id: 1, title: 'Post title', body: 'Post body'},
        {id: 2, title: 'Post title', body: 'Post body'},
        {id: 3, title: 'Post title', body: 'Post body'}
    ])

    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>

            <Form />
            <PostList posts={posts} title="Posts List" />

            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
