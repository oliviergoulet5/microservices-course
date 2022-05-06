import React, { useState } from "react";
import axios from "axios";

function PostCreate() {
    const [title, setTitle] = useState("")
    
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:4000/posts", { title })

        setTitle("");
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={handleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostCreate;