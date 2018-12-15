import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom";

import "./reset.css";
import "./app.scss";

import Home from "./components/footer/components/home"
import Order from "./components/footer/components/order"
import My from "./components/footer/components/my"
import List from "./components/footer/components/list"


class App extends Component {
  render() {
    return (
    <Router>
      <Fragment>
        <Switch> {/* 精准匹配 */}
          <Route path="/home" component = {Home}/>
          <Route path="/order" component = {Order}/>
          <Route path="/my" component = {My}/>
          <Route path="/list" component = {List}/>
        </Switch>
        <header>
          
        </header>

        <content>
        
        </content>

        <footer>
            <ul>
              <li><NavLink to="/home">首页</NavLink></li>
              <li><NavLink to="/list">详情</NavLink></li>
              <li><NavLink to="/order">订阅</NavLink></li>
              <li><NavLink to="/my">我的</NavLink></li>
            </ul>
        </footer>
      </Fragment>
      </Router>
    );
  }
}

export default App;
