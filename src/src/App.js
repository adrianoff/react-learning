import React, {useMemo, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import Form from "./Components/Form";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 2, title: 'K Post title', content: 'J Post body'},
        {id: 1, title: 'B Post title', content: 'F Post body'},
        {id: 3, title: 'C Post title', content: 'D Post body'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }

        return posts
    }, [filter.sort, posts])

    const sortedAndFilteredPosts = useMemo(
        () => sortedPosts.filter(
            post => post.title.toLowerCase().includes(filter.query) || post.content.toLowerCase().includes(filter.query)
        ),
        [filter.query, sortedPosts]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <h1 style={{margin: '15px 0', textAlign: 'center'}}>Portfolion</h1>
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <Form create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}} />

            <PostFilter filter={filter} setFilter={setFilter} />
            {sortedAndFilteredPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndFilteredPosts} title="Posts List"/>
                : <h1 style={{textAlign: "center"}}>No posts!</h1>
            }
        </div>
    );
}

export default App;
