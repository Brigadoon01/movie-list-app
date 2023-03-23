import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import LoginForm from './components/loginForm';
import Register from './components/register';
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch> 
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/register" component={Register} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
