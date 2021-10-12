import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPending(true);
        const storyData = { title, body, author };

        fetch("http://localhost:8000/stories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(storyData),
        }).then(() => {
            alert("Story Added Successfully");
            setIsPending(false);
            history.push("/");
        });
    };

    return (
        <div className="create">
            <h2>Create new Story</h2>
            <form onSubmit={handleSubmit}>
                <label> Title :</label>
                <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)} />

                <label> Story Script :</label>
                <textarea value={body} required onChange={(event) => setBody(event.target.value)} />

                <label> Author :</label>
                <select value={author} required onChange={(event) => setAuthor(event.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Story</button>}
                {isPending && <button disabled>Adding Story ...</button>}
            </form>
        </div>
    );
};

export default Create;
