import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase';
import { addNewTask, deleteTask, getTasks, updateTask } from '../firebase/taskController';
import { AppContext } from '../App';

const task = {
    title: "Este es el título",
    decription: "Esta es la descripción"
}
const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description: "" });
    const [tasks, setTasks] = useState([]);
    const [mode, setMode] = useState('add');
    const {user} = useContext(AppContext);

    const createNewTask = async () => {
        // console.log(task);
        await addNewTask(task).catch(e => console.log("Eror!!"));
        setTask({ title: "", description: "" });
        initializeTasks();
    };

    const updateExistingTask = async () => {
        await updateTask(task);
        setTask({ title: "", description: "" });
        initializeTasks();
        setMode("add");
    }

    const initializeTasks = () => {
        getTasks()
            .then((t) => setTasks([...t]))
            .catch((e) => console.error(e));
    };

    const editTask = (id) => {
        setMode('update');
        const taskToEdit = tasks.find((t) => t.id === id);
        setTask({ ...taskToEdit });
    }

    const removeTask = async id => {
        await deleteTask(id);
        initializeTasks();
    }

    useEffect(() => {
        initializeTasks();
    }, []);

    return (
        <div>
            <h1 className="text-sky-700 font-semibold text-lg">Bienvenid@ a Task List</h1>
            <div className="flex flex-col gap-4">
                <h2>Introduce una nueva tarea</h2>
                <input
                    type="text"
                    value={task.title}
                    disabled={!user}
                    placeholder='Título'
                    className='border shadow outline-none focus:ring-sky-200 rounded
                    px-2 py-1 w-full'
                    onChange={e => setTask({ ...task, title: e.target.value })}
                />

                <textarea
                    type="text"
                    rows={3}
                    value={task.description}
                    disabled={!user}
                    placeholder='Descripción'
                    className='border shadow outline-none focus:ring-sky-200 rounded
                    px-2 py-1 w-full'
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                />
                <button
                    className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold disabled:bg-sky-200"
                    disabled={!user}
                    onClick={() => mode === "add" ? createNewTask() : updateExistingTask()}
                >
                    {mode === "add" ? " Añadir" : "Actualizar"}
                </button>
            </div>
            {/* <button onClick={getTasks}>Obtén Tareas</button> */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'
                    >
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-sky-300'></div>
                        <p >{task.description}</p>
                        <div className='flex justify-between'>
                            <button className='bg-green-600 text-white py-1 px-2 rounded'
                                onClick={() => editTask(task.id)}
                            >
                                Editar
                            </button>
                            <button className='bg-red-600 text-white py-1 px-2 rounded'
                                onClick={() => window.confirm("¿Seguro que quieres eliminar esta tarea?") &&
                                    removeTask(task.id)}
                            > Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            { !user && (
                <p className='text-red-600'>
                    Necesitas estar logueado para poder leer y añadir tareas
                </p>
            )}
        </div >
    )
}

export default TaskList
