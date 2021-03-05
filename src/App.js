import VoteController from './Controllers/VoteController';
import RankController from './Controllers/RankController';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
        <Route path="/" exact component={VoteController} />
        <Route path="/rank" component={RankController} />
    </Router>
  
  //<VoteController/>
  );
}

export default App;
