const ShowItemsDropdown = ({ itemsPerPage, setItemsPerPage }) => {
    return (
        <div className='flex items-center gap-1 text-gray-500 dark:text-gray-400'>
            <label htmlFor='dropdownRadioButton'>Show</label>
            <select
                value={Number(itemsPerPage)}
                onChange={e => setItemsPerPage(e.target.value)}
                id='dropdownRadioButton'
                className='inline-flex items-center justify-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
            </select>
            <label htmlFor='dropdownRadioButton'>Items</label>
        </div>
    );
};

export default ShowItemsDropdown;
