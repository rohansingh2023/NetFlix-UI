import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import requests from "./requests";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {/* NavBar */}
            <NavBar />
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
