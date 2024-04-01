import React, { useState, createContext} from 'react';
import Header from './components/Header';
import { app } from './firebase';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

export const AppContext = createContext(null);


function App() {

  const [route, setRoute] = useState("Home")
  return (
    <AppContext.Provider value={{ route, setRoute }}>
      <Header />
      <main className='p-6'>
        { route === "Home" && <Home />}
        { route === "Login" && <Login />}
        { route === "Register" && <Register />}
      </main>
    </AppContext.Provider>
  );
}

export default App;
