import axios from "axios"
import { useEffect, useState } from "react"
import PostView from "../../components/PostView/PostView"
import "./Home.scss"

export default function Home() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get("/posts").then((response) => {
            console.log(response.data)
            setPosts(response.data)
        })
    }, [])

    if (!posts) return null

    return (
        <div className="border-gradient">
            <div className="page" id="home-page">
                {posts.map((post) => (
                    <PostView post={post} key={post.id} />
                ))}
            </div>
        </div>
    )
}