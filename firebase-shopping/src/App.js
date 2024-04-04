import React, { useState, createContext} from 'react';
import Header from './components/Header';
import { app } from './firebase';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext(null);


function App() {

  const [route, setRoute] = useState("Home");
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster/>
      <Header />
      <main className='p-6'>
        { route === "Home" && <Home />}
        { route === "Login" && <Login />}
        { route === "Register" && <Register />}
        {user && <p>Usuario logueado:{user.email}</p>}
      </main>
    </AppContext.Provider>
  );
}

export default App;
