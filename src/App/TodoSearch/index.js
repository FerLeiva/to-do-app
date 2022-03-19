import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };
    
    return (
        <input
            className="TodoSearch"
            placeholder="something"
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };