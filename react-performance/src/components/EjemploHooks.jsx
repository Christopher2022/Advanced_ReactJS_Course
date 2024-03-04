import React, {useMemo, useCallback , useState} from 'react'

// useMemo --> React.memo() --> Funciones Creacionales de componentes que deben memorizar algo
// useCallBack --> React.useCallback() Memorizar valores listados en la dependencia. Funciones en línea



const MiComponente = () => {

    const [name, setName]= useState('');
    const names = [
        'Martin',
        'Eric'
    ]

    const getName = useCallback(
        () => {
            //obtenemos un nombre aleatorio
            const random = Math.floor(Math.random()* (names.length-1));
            setName(names[random]);
        },
        [name],
    );

    const clearName = useCallback(
        () => {
            setName(null);

        }, [])

    return (
        <h1>
            Mi Componente
        </h1>
    )
}




// const Memoization = useMemo ( () => MiComponente, [a,b])
