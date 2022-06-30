import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {'name': 'By Title', 'value': 'title'},
                    {'name': 'By Content', 'value': 'content'},
                ]}
            />
            <MyInput
                placeholder={"Search..."}
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
            />
        </div>
    );
};

export default PostFilter;