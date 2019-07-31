import React from "react";
import { Link, Switch, Route } from 'react-router-dom'

import ReduxConsumerExample from './components/ReduxConsumerExample.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const Home = () => (<div> <h1>Home</h1> </div>);
    const About = () => (<div> <h1>About</h1> </div>);

    return (
      <div>
        <header>
          <h1>React + Redux + Router</h1>
          <ReduxConsumerExample/>
          <Link to="/">Home</Link>
          <Link to="/about">ABOUT</Link>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about'  component={About}/>
          </Switch>
        </main>
      </div>

    );
  }
}
