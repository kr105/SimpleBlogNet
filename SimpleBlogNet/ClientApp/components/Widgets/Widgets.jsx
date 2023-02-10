import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Link, NavLink } from "react-router-dom";
import "./Widgets.scss";

const Widget = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-header">{props.data.title}</div>
            <div className="card-body">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{props.data.content}</ReactMarkdown>
            </div>
        </div>
    )
};

export default function Widgets() {
    const [widgets, setWidgets] = useState(null)

    useEffect(() => {
        axios.get("/widgets").then((response) => {
            setWidgets(response.data)
        })
    }, [])

    if (!widgets) return null

    return (
        widgets.map((widget) => (
            <Widget key={widget.id} data={widget} />
        ))
    )
}
