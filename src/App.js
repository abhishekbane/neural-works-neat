import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import HomeScreen from './containers/HomeScreen/HomeScreen';
import HebbInputScreen from './containers/HebbInputScreen/HebbInputScreen';
import NavigationBar from './components/NavigationBar/NavigationBar';
import PerceptronInputScreen from './containers/PerceptronInputScreen/PerceptronInputScreen';
import { HOME_PAGE, HEBB_INPUT_PAGE, PERCEPTRON_INPUT_PAGE, ADALINE_INPUT_PAGE, BACK_PROPOGATION_INPUT_PAGE } from './utilities/paths';

import './App.css';

class App extends Component {

  currentPage = () => {
    let currentPage = 'Home';

    switch (this.props.location.pathname.toLocaleLowerCase()) {
      case HEBB_INPUT_PAGE:
        currentPage='Hebb Network';
        break;

      case PERCEPTRON_INPUT_PAGE:
        currentPage='Perceptron Network';
        break;

      case ADALINE_INPUT_PAGE:
        currentPage='Adaline Network';
        break;

      case BACK_PROPOGATION_INPUT_PAGE:
        currentPage='Back Propagation Network';
        break;

      default:
        currentPage='Home';
        break;
    }
    return currentPage
  };

  render() {
    return (
        <div className="App">
          <NavigationBar currentPage={this.currentPage()} />
          <Switch>
            <Route path={ HEBB_INPUT_PAGE } component={HebbInputScreen} />
            <Route path={ PERCEPTRON_INPUT_PAGE } component={PerceptronInputScreen} />
            <Route path={ HOME_PAGE } component={HomeScreen} />  
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
