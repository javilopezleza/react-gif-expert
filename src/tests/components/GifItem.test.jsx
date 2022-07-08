import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe('test in <GifItem />', () => {

    const title = 'Soy un titulo';
    const url = 'https://url-de-prueba.com';

    test('Should do match with the snapshot', () => {

        const {container} = render(<GifItem  
            title={title}
            url={url}
         />)
        
        expect(container).toMatchSnapshot();

    });

});