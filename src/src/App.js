import React, {useState} from "react";
import Counter from "./Components/Counter";
import './Styles/App.css'
import PostItem from "./Components/PostItem";

function App() {
    const [value, setValue] = useState('Some text');

    const [posts, setPosts] = useState([
        {id: 1, title: 'Post title', body: 'Post body'},
        {id: 2, title: 'Post title', body: 'Post body'},
        {id: 3, title: 'Post title', body: 'Post body'}
    ])

    return (
        <div className="App">
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>

            <h1>Список постов</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}

            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
