import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Shows from "./Pages/Shows/Shows";
import Peoples from "./Pages/Peoples/Peoples"
import Search from "./Pages/Search/Search";
//import { NaturePeopleSharp } from "@material-ui/icons";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Shows} exact />
            <Route path="/people" component={Peoples} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
