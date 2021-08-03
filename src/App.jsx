import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LotteryPick from './pages/LotteryPick';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LotteryPick} />
      <Route path="/result" component={Result} />
    </div>
  );
}

export default App;
