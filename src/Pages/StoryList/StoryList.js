import { Link } from "react-router-dom";

const StoryList = (props) => {
    const stories = props.stories;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {stories.map((story) => (
                <Link to={"/stories/" + story.id} className="story-link">
                    <div className="blog-preview" key={story.id}>
                        <h2>{story.title}</h2>
                        <p>Written by {story.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default StoryList;
