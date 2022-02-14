import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//import { data } from "../../datas/data";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ApartmentPage from "../../pages/ApartmentPage/ApartmentPage";
import ErrorPage from "../ErrorPage/ErrorPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/apartment/:id"
            render={(props) => <ApartmentPage {...props} />}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            exact
            path="/apartment/:id"
            render={(props) => <ApartmentPage {...props} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;*/
