import * as React from 'react';
import './App.css';

export enum CounterHandlers {
  Inc,
  Dec
}

interface ICounterOutputProps {
  counter: number;
  onClick: (mode: CounterHandlers) => void;
}
const counterOutput = (props: ICounterOutputProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p className='Counter'>{props.counter}</p>
      <button onClick={() => props.onClick(CounterHandlers.Dec)} className='CounterButton'>Decrement</button>
      <button onClick={() => props.onClick(CounterHandlers.Inc)} className='CounterButton'>Increment</button>
    </div>
  );
}

export default counterOutput;