import StoryList from "../StoryList/StoryList";
import UseFetch from "../../General/UseFetch/UseFetch";

const Home = () => {
    const { data: stories, isPending, error } = UseFetch("http://localhost:8000/stories");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
            {stories && <StoryList stories={stories} title="All Animal Story" />}
        </div>
    );
};

export default Home;
