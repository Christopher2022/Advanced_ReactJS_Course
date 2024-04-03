import React, { useContext } from 'react';
import { SiFirebase } from "react-icons/si";
import { AppContext } from '../App';

const Header = () => {
    const { route, setRoute } = useContext(AppContext);

    return (
        <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("Home")}>
                <SiFirebase className='text-2xl text-pink-600' />
                <span className='text-xl font-semibold text-pink-600'>FireShopping</span>
            </div>
            <div className='flex gap-2'>
                <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 
                transition' onClick={() => setRoute("Login")}>Login</button>
                <button onClick={() => setRoute("Register")}>...o regístrate</button>
            </div>
        </header>
    )
}

export default Header
