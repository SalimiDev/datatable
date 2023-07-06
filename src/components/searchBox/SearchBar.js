import { useState } from 'react';
import SearchIconSvg from '../../assets/svgIcons/SearchIconSvg';

import { searchHandler } from '../../helpers/searchHandler';

const SearchBar = ({ setSearchData }) => {
    const [inputValue, setInputValue] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        setSearchData(searchHandler(inputValue)); //=>set result of the searching data to the state in DataTable
    };

    return (
        <form onSubmit={submitHandler}>
            <label for='default-search' class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
                Search
            </label>

            <div class='relative'>
                <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <SearchIconSvg />
                </div>
                <input
                    type='search'
                    id='default-search'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    class='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search All Data, Name, Username...'
                    required
                />
                <button
                    type='submit'
                    class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
