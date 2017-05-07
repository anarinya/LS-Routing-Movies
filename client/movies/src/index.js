import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import { MovieList, MovieDetails, AddMovie } from './containers';
import { Nav, Footer } from './components';
import './styles/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/new-movie" component={AddMovie} />
            <Route path="/" component={MovieList} />
          </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
