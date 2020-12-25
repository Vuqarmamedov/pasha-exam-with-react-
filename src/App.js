import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WorkerInfo from './components/WorkerInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />

            <section className="main">
                <Sidebar />
                
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <Dashboard />
                    </Route>
                    <Route path="/info/:id">
                      <WorkerInfo />
                    </Route>
                  </Switch>
                </Router>
            </section>
        </div>
    );
}

export default App;
