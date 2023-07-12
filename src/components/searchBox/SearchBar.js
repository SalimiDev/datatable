import { useEffect, useState } from 'react';
import { searchHandler } from '../../helpers/searchHandler';

import SearchIconSvg from '../../assets/svgIcons/SearchIconSvg';

const SearchBar = ({ setSearchData, tableColumns, dataToSearch }) => {
    const [globalSearchValue, setGlobalSearchValue] = useState('');

    useEffect(() => {
        setSearchData(searchHandler({}, tableColumns, dataToSearch, globalSearchValue));
    }, [globalSearchValue, setSearchData]);

    return (
        <form>
            <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <SearchIconSvg />
                </div>
                <input
                    type='search'
                    id='default-search'
                    value={globalSearchValue}
                    onChange={e => setGlobalSearchValue(e.target.value)}
                    className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search All Data, Name, Username...'
                    required
                />
            </div>
        </form>
    );
};

export default SearchBar;
