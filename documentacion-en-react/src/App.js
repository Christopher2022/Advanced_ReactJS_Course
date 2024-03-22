import * as React from 'react';
import './App.css';

const num: number = 6;

type AppProps = {
  saludo: string
}

function App(props: AppProps): React.Node {
  return (
    <div className="App">
      {props.saludo}
    </div>
  );
}

export default App;
