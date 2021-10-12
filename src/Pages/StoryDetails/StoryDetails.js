import { useState } from "react";
import { useHistory, useParams } from "react-router";
import UseFetch from "../../General/UseFetch/UseFetch";

const StoryDetails = () => {
    const [isDeleteFailed, setIsDeleteFailed] = useState(false);
    const { id } = useParams();
    const { data: story, isPending, error } = UseFetch("http://localhost:8000/stories/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/stories/" + story.id, {
            method: "DELETE",
        }).then((result) => {
            if (!result.ok) {
                alert("delete data failed");
            } else {
                history.push("/");
            }
        });
    };

    return (
        <div className="story-details">
            {isPending && <div>Loading ... </div>}
            {isDeleteFailed && <div>{error}</div>}
            {story && (
                <article>
                    <h2>{story.title}</h2>
                    <div>{story.body}</div>
                    <div>Author : {story.author}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default StoryDetails;
