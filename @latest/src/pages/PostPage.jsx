import { Outlet, useParams, Link } from "react-router-dom";
import { useBitcoin } from "../Hooks/useBitcoin"
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PostCard from "../PostCard";
import { Grid } from '@mui/material';

const currencies = ['USD', 'AUD', 'NZD']

// save as pages/PostsPage.jsx
export function PostsPage() {
    return (
        <div className="Posts">
            <h2>Bitcoin Posts</h2>
            <Outlet />
        </div>
    )
}

export function PostList() {

    const [CardState, SetCardState] = useState(false)

    function handleCick(){
        SetCardState(true)

    }

    const postsData =
       //useData('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
        useBitcoin(currencies)
        
    // the ? means only call map if postsData is not null
    const postList = postsData?.map(post => {
        const currency = Object.keys(post.bitcoin)[0]
        return <PostCard key={currency} currency={currency} value={post.bitcoin[currency.toLowerCase()]}></PostCard>
//curreny and value are being passed to the PostCard function as props. The computer knows they are proprs because of the map function
}  );

    return (
    <>

            {CardState&&<ul>{postList}</ul>}


            <a href="/">Log Out</a>
            <button onClick={handleCick}>Load Cards</button>


        
    </>
    )
}

