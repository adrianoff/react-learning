import React, {useMemo, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 2, title: 'K Post title', content: 'J Post body'},
        {id: 1, title: 'B Post title', content: 'F Post body'},
        {id: 3, title: 'C Post title', content: 'D Post body'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('sortedPosts call')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }

        return posts
    }, [selectedSort, posts])

    const sortedAndFilteredPosts = useMemo(
        () => sortedPosts.filter(
            post => post.title.toLowerCase().includes(searchQuery) || post.content.toLowerCase().includes(searchQuery)
        ),
        [searchQuery, sortedPosts]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <h1 style={{margin: '15px 0', textAlign: 'center'}}>Portfolion</h1>
            <Form create={createPost}/>
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
            <div>
                <MyInput
                    placeholder={"Search..."}
                    onChange={e => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
            </div>
            {sortedAndFilteredPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndFilteredPosts} title="Posts List"/>
                : <h1 style={{textAlign: "center"}}>No posts!</h1>
            }
        </div>
    );
}

export default App;
