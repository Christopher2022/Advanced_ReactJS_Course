import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from './Todo';


afterEach(() => cleanup());


describe('Todo component is working correctly', () => {

    const todo = { id: 5, text: "Hacer la compra", completed: false };
    render(<Todo todo={todo} />);
    const Todoelement = screen.getByTestId(`todo-test-${todo.id}`);
    const checkbox = Todoelement.querySelector('#checkbox');

    //test o it
    it('should render TODO component', () => {
        expect(Todoelement).toBeInTheDocument();
    })

    //test o it
    it('should have right text', () => {
        expect(Todoelement).toHaveTextContent(todo.text);
    })

    const todo2 = { id: 12, text: "Hacer la compra", completed: true };
    render(<Todo todo={todo2} />);
    const Todoelement2 = screen.getByTestId(`todo-test-${todo2.id}`);
    const checkbox2 = Todoelement2.querySelector('#checkbox');

    //test o it
    it('should be checked', () => {
        expect(checkbox2).toBeChecked();
    })

    // SNAPSHOT : Simulaciones del renderizado de nuestras páginas
    it('matches snapshot', () => {
        const snapTodo = { id: 1, text: "Pasar los test", completed: false };
        const tree  = renderer.create(<Todo todo={snapTodo}/>);
        expect(tree).toMatchSnapshot();
    })



})
// describe('Todo component should check/uncheck complete/not completed todos', () => {
//     const todo = { id: 5, text: "Hacer la compra", completed: true };
//     render(<Todo todo={todo} />);
//     const Todoelement = screen.getByTestId(`todo-test-${todo.id}`);
//     const checkbox = Todoelement.querySelector('#checkbox');

//     //test o it
//     it('should be checked', () => {
//         expect(checkbox).toBeChecked();
//     })


// })









//TODO ACA ES UNA PRUEBA HECHA POR EL VIDEO//

// const suma = (a, b) => a - b

// console.assert(suma(1,3) ===4, "1+3 deberia ser 4")

// if (suma(1, 3) === 4) {
//     console.error(" 1 y 3 deberia ser 4");
// }
