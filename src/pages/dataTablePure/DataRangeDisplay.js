const DataRangeDisplay = ({ rangeStart, rangeEnd , searchData }) => {
    return (
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
            Showing{' '}
            <span className='font-semibold text-gray-900 dark:text-white'>
                {rangeStart}-{rangeEnd}
            </span>{' '}
            of <span className='font-semibold text-gray-900 dark:text-white'>{searchData.length}</span>
        </span>
    );
};

export default DataRangeDisplay;
