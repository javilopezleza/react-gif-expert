import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe('test in <GifItem />', () => {

    const title = 'Soy un titulo';
    const url = 'https://url-de-prueba.com/';

    test('Should do match with the snapshot', () => {

        const { container } = render(<GifItem
            title={title}
            url={url}
        />)

        expect(container).toMatchSnapshot();

    });

    test('should show the image with the appropiate URL and ALT ', () => {

        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src ).toBe( url );

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('should show the title at the component', () => { 

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();


     })

});