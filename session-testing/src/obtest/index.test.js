import { sumar, restar, multiplicar, dividir, devuelveEmail, devuelveObjeto, Rectangulo, devuelveArrayStr, devuelveArrayNum, devuelveArrayObj, devuelveTrue, devuelveFalse,devuelveNull,devuelveUndefined } from "./index";
//Aquí vamos a crear nuestro casos de prueba
//Describe , test (it)
//Assertions "expect"

describe('Assertions básicos en los números', () => {

    it('La suma funciona', () => {
        const resultado = sumar(2, 3);
        expect(resultado).toBe(5);
        expect(resultado).toEqual(5);
    })
    it('La suma no resta', () => {
        const resultado2 = sumar(2, 3);
        expect(resultado2).not.toBe(-1);
        expect(resultado2).not.toEqual(-1);
    })
    it('La resta funciona', () => {
        const resultado = restar(2, 3);
        expect(resultado).toBe(-1);
        expect(resultado).toEqual(-1);
    })
    it('La multiplicación funciona', () => {
        const resultado = multiplicar(2, 3);
        expect(resultado).toBe(6);
        expect(resultado).toEqual(6);
    })
    it('La división funciona', () => {
        const resultado = dividir(3, 3);
        expect(resultado).toBe(1);
        expect(resultado).toEqual(1);
    })
    it('Probamos el >', () => {
        const resultado = dividir(100, 5);
        expect(resultado).toBeGreaterThan(0); //es mayor que 0
        expect(resultado).toBeGreaterThanOrEqual(20);//es mayor o igual que 20
    })
    it('Probamos el <', () => {
        const resultado = multiplicar(5, 8);
        expect(resultado).toBeLessThan(100);//es menor que 100
        expect(resultado).toBeGreaterThanOrEqual(40);//es menor o igual que 40
    })
});

describe('Assertion básicos con booleanos', () => {
    it('Probar que algo es true', () => {
        const r = devuelveTrue();
        expect(r).toBeTruthy();
    });
    it('Probar que algo es false', () => {
        const r = devuelveFalse();
        expect(r).toBeFalsy();
    });
    it('Probar que algo es null', () => {
        const r = devuelveNull();
        expect(r).toBeNull();
    });
    it('Probar que algo es defined', () => {
        const r = 5;
        expect(r).toBeDefined();
    });
    it('Probar que algo es undefined', () => {
        const r = devuelveUndefined();
        expect(r).toBeUndefined();
    });
    
});


describe('Assertion básicos en los strings', () => {
    test('El campo debe tener un email', () => {
        const email = devuelveEmail();
        expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/); //función irregular para validar datos
        expect(email).toMatch('auchris95@gmail.com'); //función irregular para validar datos

    })
});

describe('Assert básicos en objetos', () => {
    test('Dos objetos son iguales', () => {
        const objA = devuelveObjeto();
        const objB = devuelveObjeto();
        expect(objA).toEqual(objB); //Aca se utiliza toEqual por motivos que son dos objetos diferentes

    })

    test('El objeto DEBE tener una propiedad llamado "ancho"', () => {
        const rectangulo = devuelveObjeto();
        expect(rectangulo).toHaveProperty('ancho');//Ayuda a encontrar una propiedad del objeto

    })

    test('La propiedad "Ancho" del rectángulo siempre debe ser 10', () => {
        const rectangulo = devuelveObjeto();
        expect(rectangulo).toHaveProperty('ancho', 10);//Se puede pasar una propiedad para comparar

    })

    test('El objecto rectA debe ser un Clase Rectangulo', () => {
        // const rectA = { ancho: 10, alto: 11 };
        const rectA = new Rectangulo(10, 11);
        expect(rectA).toBeInstanceOf(Rectangulo);//instanciamiento donde compara si es tipo rectangulo
    })
})

describe('Assert básicos en arrays', () => {
    test('Array contiene leche', () => {
        const ar = devuelveArrayStr();
        expect(ar).toContain('leche'); //igual que toBe compara valores
    })

    test('Array contiene 5', () => {
        const ar = devuelveArrayNum();
        expect(ar).toContain(5); //igual que toBe compara valores
    })

    test('Array contiene id 5', () => {
        const ar = devuelveArrayObj();
        expect(ar).toContainEqual({ id: 5 }); //igual compara valores
    })
});

describe('Assertions con funciones mock', () => {
    it('Que la función haya sido llamada', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn(); //aca sido definida
        expect(mockFn).toHaveBeenCalled();//ha tenido que estar llamada

    })

    it('Que la función haya sido llamada n veces', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn(); //aca sido definida
        const res2 = mockFn(); //aca sido definida
        const res3 = mockFn(); //aca sido definida
        expect(mockFn).toHaveBeenCalledTimes(3);//ha sido llamada una vez

    })

    it('Que la función haya sido llamada con un parámetro', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn('prueba'); //aca sido definida
        expect(mockFn).toHaveBeenCalledWith('prueba');//ha tenido que estar llamada

    })

});


