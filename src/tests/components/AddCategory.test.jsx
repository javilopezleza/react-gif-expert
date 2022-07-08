import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";


describe('Tests in <AddCategory />', () => {

    test('should change the value in the textbox', () => {


        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
        screen.debug();

    });

    test('should call inNewCategory if the input have a value ', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); //Comprueba si la funcion ha sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Comprueba si la funcion ha sido llamada X cantidad de veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //Comprueba si la funcion ha sido llamada con un valor


    });

    test("shouldn't call onNewCategory if the input it's void", () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0); //Comprueba si la funcion ha sido llamada X cantidad de veces
        expect(onNewCategory).not.toHaveBeenCalled(); //Comprueba si no se ha llamado la funcion



     });

});

