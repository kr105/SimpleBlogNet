import moment from "moment/moment";
import { Link, NavLink, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import "./PostView.scss";

export default function PostView({ post }) {
    return (
        <article>
            {/* Post header */}
            <header className="mb-4">
                {/* Post title */}
                <h1 className="fw-bolder mb-1">{post.title}</h1>
                {/* Post meta content */}
                <div className="text-muted fst-italic mb-2">{moment(post.createdAt).format('LLLL')}</div>
            </header>
            {/* Preview image figure */}
            {post.introImage != null &&
                < figure className="mb-4"><img className="img-fluid rounded" src="{post.introImage}" alt="..." /></figure>
            }
            {/* Post content */}
            <section className="mb-5">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{post.intro}</ReactMarkdown>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{post.content}</ReactMarkdown>
            </section>
        </article>
    )
}