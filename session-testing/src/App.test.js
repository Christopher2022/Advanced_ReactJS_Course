import {render} from "@testing-library/react"
import App from "./App";
import ListadoNotas from "./components/ListadoNotas";

describe('React- Testeamos los componentes', () => {
    test('El listado se renderiza correctamente', () => {
        const r = render(<ListadoNotas/>);
        expect(r).toBeDefined();
    })
    test('El listado se renderiza de un listado correctamente', () => {
        const notas = ["Bajar la basura", "Comprar huevos"];
        const r = render(<ListadoNotas notas={notas} />);
        expect(r).toBeDefined();
    })

    test('El listado renderiza soló las notas que debe renderizar', () => {
        const notas = ["Bajar la basura", "Comprar huevos"];
        const r = render(<ListadoNotas notas={notas} />);
        const div = r.getByLabelText('listado-notas');
        // expect(r).toBeDefined();
        expect(div.childElementCount).toBe(2);
    })
    
    
})

describe('REACT - Hacemos un test de integración', () => {
    test('Renderizamos la app ', () => {
      const r = render(<App/>)
      expect(r).toBeDefined();
    })
    
});

