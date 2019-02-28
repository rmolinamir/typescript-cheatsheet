import * as React from 'react';
import './App.css';

export enum ECounterHandlers {
  Inc,
  Dec
}

interface ICounterOutputProps {
  counter: number;
  onClick: (mode: ECounterHandlers) => void;
}
const counterOutput = (props: ICounterOutputProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p className='Counter'>{props.counter}</p>
      <button onClick={() => props.onClick(ECounterHandlers.Dec)} className='CounterButton'>Decrement</button>
      <button onClick={() => props.onClick(ECounterHandlers.Inc)} className='CounterButton'>Increment</button>
    </div>
  );
}

export default counterOutput;