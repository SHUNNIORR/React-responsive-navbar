import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Tema1 } from "./components/Pages/Tema1";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Tema5 } from "./components/Pages/Tema5";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tema1" component={Tema1} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/tema5" component={Tema5} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
