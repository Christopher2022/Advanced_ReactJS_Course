import { sumar } from "./index";
//Aquí vamos a crear nuestro casos de prueba
//Describe , test (it)
//Assertions "expect"


describe('Assertions básicos', () =>{

    it('La suma funciona', () => {
        const resultado= sumar(2,3);
        expect(resultado).toBe(5);
    })

    it('La suma no resta', () => {
        const resultado2= sumar(2,3);
        expect(resultado2).not.toBe(-1);
        
    })
});