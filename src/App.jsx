import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LotteryPick from './pages/LotteryPick';
import Result from './pages/Result';
import LotteryPickContext from './context/LotteryPickContext';
import { generateLottryPick } from './lib/utils/LotteryPickGenerator';

function App() {
  return (
    <LotteryPickContext.Provider value={generateLottryPick()}>
      <div className="App">
        <Route exact path="/" component={LotteryPick} />
        <Route path="/result" component={Result} />
      </div>
    </LotteryPickContext.Provider>
  );
}

export default App;
