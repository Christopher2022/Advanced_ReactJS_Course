// Aquí es donde vamos declarar todas las funciones y variables que necesitemos para ilustrar los casos de prueba


// const sumar = (a,b) => {
//     return (a+b);
// }

export const sumar = (a, b) => (a + b);
export const restar = (a, b) => (a - b);
export const multiplicar = (a, b) => (a * b);
export const dividir = (a, b) => (a / b);

export const devuelveEmail = () => 'auchris95@gmail.com';
export const devuelveObjeto = () => {
    return {
        ancho: 10,
        alto: 19
    }
}

export class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

export const devuelveArrayNum = () => [1, 2, 3, 4, 5]
export const devuelveArrayObj = () => [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
export const devuelveArrayStr = () => ['leche', 'huevos', 'cereales', 'jamon', 'yogures']


export const devuelveTrue = () => true
export const devuelveFalse = () => false
export const devuelveNull = () => null 
// export const devuelveDefined = () => defined 
export const devuelveUndefined = () => undefined

