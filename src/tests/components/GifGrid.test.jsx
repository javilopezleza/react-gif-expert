import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('test in <GifGrid />', () => {

    const category = 'One Punch';

    test('should show the init loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));

    })

    test('should show items when be loading the images useFetchGifs', () => { 

        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title:'Goku',
                url:'https://localhost/goku.jpg'
            },
        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole('img').length).toBe(2);

     })

})