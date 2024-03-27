import React, { useState } from "react";
import TaskList from "./lists/TaskList";
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */

const App = () => {
    const [dark, setDark] = React.useState(false);
    const [showSettings, setShowSettings] = useState(false);

    /**
     * Función para intercambiar la variable de estado light <-> dark
     */
    const toggleDark = () => {
        setDark(!dark);
    };

    return (
        <div className={`${dark ? "dark" : ""}`}>
            <div className={`h-screen p-4 flex-col  bg-gray-100
         dark:bg-slate-800 transition dark:text-gray-50`}>
                <TaskList showSettings={showSettings} setShowSettings={setShowSettings} />

                <AnimatePresence
                    initial={false}
                    mode="await"
                    onExitComplete={() => null}
                >
                    {showSettings && (
                        <motion.div
                            initial={{ y: "100vh" }}
                            animate={{ y: "0" }}
                            exit={{ y: "100vh" }}
                        >
                            <Settings toggleDark={toggleDark} />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default App;