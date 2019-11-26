import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const equations = ['÷', 'x', '-', '+', '='];
  const clear = ['clear', 0];
  const dis = [0]

  return (
    <div className = "app">
      <div className = "display">
      <CalculatorDisplay display = {dis[0]} />
      </div>
      <div className = "clear1">
      <ActionButton action ={clear[0]} />
      <div className ="red">
      <NumberButton num = {equations[0]} />
      </div>
      </div>
      <div className = "a123">
      <NumberButton num = {numbers[0]} />
      <NumberButton num = {numbers[1]} />
      <NumberButton num = {numbers[2]} />
      <div className ="red">
      <NumberButton num = {equations[1]} />
      </div>
      </div>
      <div className = "a456">
      <NumberButton num = {numbers[3]} />
      <NumberButton num = {numbers[4]} />
      <NumberButton num = {numbers[5]} />
      <div className ="red">
      <NumberButton num = {equations[2]} />
      </div>
      </div>
      <div className = "a789">
      <NumberButton num = {numbers[6]} />
      <NumberButton num = {numbers[7]} />
      <NumberButton num = {numbers[8]} />
      <div className ="red">
      <NumberButton num = {equations[3]} />
      </div>
      </div>
      <div className = "clear1">
      <ActionButton action ={clear[1]} />
      <div className ="red">
      <NumberButton num = {equations[4]} />
      </div>
      </div>
    </div>
  );
};

export default App;
