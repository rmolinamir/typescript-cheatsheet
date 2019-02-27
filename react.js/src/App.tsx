import * as React from 'react';
// CSS & Assets
import './App.css';
import CounterOutput, { CounterHandlers } from './CounterOutput';
import logo from './logo.svg';

/**
 * MORE INFO AT REACT TYPESCRIPT.
 */

// interface IAppProps {}
interface IAppState {
  counterValue: number;
}

class App extends React.Component<{} /* IAppProps */, IAppState> {
  public state = { counterValue: 0 }; // State is required to be public.

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React.js TSX</h1>
        </header>
        <p className="App-intro">
          <CounterOutput 
            counter={this.state.counterValue}
            onClick={this.counterHandler} />
        </p>
      </div>
    );
  }

  private counterHandler = (mode: CounterHandlers) => {
    this.setState(prevState => {
      switch(mode) {
        case CounterHandlers.Dec:
          return { counterValue: prevState.counterValue - 1 }
        case CounterHandlers.Inc:
          return { counterValue: prevState.counterValue + 1 }
      }
    });
  }
}

export default App;
