import Navbar from "./Components/Organism/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Pages/Create/Create";
import StoryDetails from "./Pages/StoryDetails/StoryDetails";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/stories/:id">
                            <StoryDetails />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
