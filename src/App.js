import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Footer from './Container/Footer/Footer';
// import Ufooter from './Container/Footer/Upperfooter';
import './App.css';
import Layout from './Container/Layout/Layout';
import Rewards from './Container/Rewards';
// import Sections from './Container/Sections';
class App extends Component {
  render () {

  return (
    <div className="App">
        {/* layout consist code for header(Navigation Bar) */}
        <Layout>
        <Switch>
          <Route path="/" exact component = {Rewards}/>
        </Switch>
        </Layout>
{/* <Route path="/foot" component = {Footer}/>
<Route path="/ufoot" component = {Ufooter}/>
<Route path="/ufoot" component = {Ufooter}/>
<Route path="/sections" component = {Sections}/> */}
    </div>
  );
}
}

export default App;


