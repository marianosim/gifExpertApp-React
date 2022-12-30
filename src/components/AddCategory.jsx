import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <div style={{display: 'flex'}}>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Buscar gifs'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
            <input type="button" onClick={onSubmit} style={{borderRadius: '5px'}} value='Buscar' />
        </div>

    )
};
