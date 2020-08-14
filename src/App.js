import React from 'react';
import './App.css';
import './Home.css'
import Home from './components/Home'
import { Route} from 'react-router-dom'
import Main from './components/Main';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}></Route>
      <Route path='/main' exact >
        <AuthRoute>
          <Main/>
        </AuthRoute>
      </Route>
    </div>
  );
}

export default App;
