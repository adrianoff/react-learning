import React, {useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";
import MySelect from "./Components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 2, title: 'K Post title', content: 'J Post body'},
        {id: 1, title: 'B Post title', content: 'F Post body'},
        {id: 3, title: 'C Post title', content: 'D Post body'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)

        const sortedPosts = [...posts].sort((a ,b) => {
            return a[sort].localeCompare(b[sort])
        })

        setPosts(sortedPosts)
    }

    return (
        <div className="App">
            <Form create={createPost}/>
            <h1 style={{margin: '15px 0'}}></h1>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {'name': 'By Title', 'value': 'title'},
                        {'name': 'By Content', 'value': 'content'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="Posts List"/>
                : <h1 style={{textAlign: "center"}}>No posts!</h1>
            }


        </div>
    );
}

export default App;
