import Header from './components/Header';
import { app } from './firebase';


function App() {
  return (
    <>
      <Header/>
      <main className='p-6'>
        Bienvenid@ a FireShopping
      </main>
    </>
  );
}

export default App;
