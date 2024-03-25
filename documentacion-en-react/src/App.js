import * as React from 'react'; // se importa asi para el uso de componentes y escaneo con flow
import './App.css';

const str: string = 'Hola Mundo';
const num: number = 6;

type AppProps = {
  saludo: string,
  numero?: number
}

// type AppProps = {
//   saludo: string
// }

// function App(props: AppProps): React.Node {
function App(props: AppProps):React.Node {
  return (
    <div className="App">
      {props.saludo}
    </div>
  );
}

export default App;
