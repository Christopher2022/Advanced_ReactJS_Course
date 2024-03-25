import React from "react";
import TaskList from "./lists/TaskList";
// import Settings from "./settings/Settings";

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */


const App = () => {
    return (
        <div>
            <TaskList/>
            {/* <Settings/> */}
        </div>
    );
};

export default App;