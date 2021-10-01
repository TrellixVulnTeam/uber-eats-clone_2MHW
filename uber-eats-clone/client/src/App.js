import './App.css';
import Header from './components/Header' ;
import Main from './components/MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CustomerSignup from '../src/components/Authentication/CustomerSignup'
import CustomerSignup2 from './components/Authentication/CustomerSignup2';
import Profile from './components/Customer/Profile';
import {Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Router>
      <Header />
        <Route path='/signup' exact component= {CustomerSignup }/>
        <Route path="/" exact component={Main}/>
      </Router>
      
      {/* <Main />
      <CustomerSignup /> */}

      <Profile/>
    </div>
    </Provider>
  );
}

export default App;
