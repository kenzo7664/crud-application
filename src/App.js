import "./App.css";
import Create from "./components/create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='main'>
          <h2 className='main-header'>CRUD Operation</h2>
          <Switch>
            <Route exact path='/' component={Create} />
            <Route exact path='/read' component={Read} />
            <Route exact path='/update' component={Update} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
