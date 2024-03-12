import React from 'react';
import './App.css'; 
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'

const App = (props) => {
  const {newServiceWorkerDetected, onLoadNewServiceWorkerAccept}  = props;

  const [newItem, setNewItem] = React.useState("");
  const [items, setItem] = React.useState([]);

  const handleAddItem = () => {
    //Agregar el nuevo item a la lista de items
    setItem([...items, newItem]);

    //Limpiar valores del input
    setNewItem('');
  }

  // const handleKeyPress = event => {
  //   if (event.key === 'Enter') {
  //     handleAddItem();
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>**Proyecto PWA - Lista de compra v8**</h1>
        { newServiceWorkerDetected && <div style={{ backgroundColor: 'red', marginBottom: 20 }}>
          <h3>Nueva actualización! ¿Quieres actualizar?</h3>
          <button onClick={onLoadNewServiceWorkerAccept}>Actualizar!</button>
        </div>}
        <input style={{ fontSize: '22px' }} type="text" onKeyPress={e => e.key === 'Enter' && handleAddItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: '22px' }} onClick={handleAddItem} >Añadir</button>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App);
