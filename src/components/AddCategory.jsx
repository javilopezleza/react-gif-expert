import PropTypes from 'prop-types';
import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        setInputValue('');
        
        onNewCategory(inputValue.trim() );
        

    }

    return (
        <form aria-label="form" onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.protoTypes ={
    onNewCategory: PropTypes.func.isRequired
}