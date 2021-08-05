import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LotteryPick from './pages/LotteryPick';
import Result from './pages/Result';
import { LotteryPickProvider } from './context/LotteryPickContext';

function App() {
  return (
    <LotteryPickProvider>
      <div className="App">
        <Route exact path="/" component={LotteryPick} />
        <Route path="/result" component={Result} />
      </div>
    </LotteryPickProvider>
  );
}

export default App;
