import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";


describe('Tests in <AddCategory />', () => {

    test('should change the value in the textbox', () => {


        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target:{value:'Saitama'}} );

        expect(input.value).toBe('Saitama');
        screen.debug();


    });


});

