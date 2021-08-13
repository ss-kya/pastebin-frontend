import { useState } from "react"; 

function PostInput():JSX.Element {
    const [ description, setDescription ] = useState("");
    const [ title, setTitle ] = useState("");

    const onSubmitPost = async () => {
        // e.preventDefault();
        try {
            const body = { title, description };
            const response = await fetch("http://localhost:4000/input", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            
            console.log(response);
        }
        catch(err) {
            console.log(err.message)
        }
    };

    return (
        <>
            <form onSubmit={onSubmitPost}>
                <input
                    type="text" 
                    value={title}
                    placeholder="Your title here"
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    value={description}
                    placeholder="Paste your text here"
                    onChange={e => setDescription(e.target.value)}
                />
                <button>Save Post</button>
            </form>
        </>
    )
}

export default PostInput;