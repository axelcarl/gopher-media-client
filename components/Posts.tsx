"use client";

import { useEffect, useState } from "react";
import Post, { post } from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?id=0&amount=10`, {
            credentials: "include",
        })

        const json = await data.json();

        setPosts(json.posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center">
            {posts.map((post: post) => <Post key={post.id} title={post.title} text={post.text} />)}
        </div>
    );
}


export default Posts;
