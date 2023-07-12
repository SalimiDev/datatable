import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import SearchBar from '../../components/searchBox/SearchBar';
import ShowItemsDropdown from './ShowItemsDropdown';
import RenderPageNumbers from './RenderPageNumbers';
import DataRangeDisplay from './DataRangeDisplay';
// helpers
import { searchHandler } from '../../helpers/searchHandler';
import generateTableData from '../../helpers/generateTableData';
// custom hooks
import usePagination from '../../hooks/usePagination';
// icons
import { FaSortUp } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';

const DataTablePure = () => {
    // states
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const tableData = generateTableData(data);
    const tableColumns = Object.keys(tableData[0] || []);
    const [currentColumn, setCurrentColumn] = useState('');

    useEffect(() => {
        const getStorageData = JSON.parse(localStorage.getItem('tableData'));
        setData(getStorageData);
    }, []);

    // handle to initializing first data
    useEffect(() => {
        !searchData?.length && setSearchData(tableData);
    }, [tableData]);

    // handle to search individually for each column
    const columnSearcher = e => {
        const { name, value } = e.target;
        setInputValues(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      

      useEffect(() => {
        setSearchData(searchHandler(inputValues, tableColumns, tableData));
      }, [inputValues, setSearchData]);
      

    const defaultItemsPerPage = 5;
    const {
        currentPage,
        slicedData,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        changePage,
        listOfPagesNumber,
        setItemsPerPage,
        itemsPerPage,
        rangeStart,
        rangeEnd,
        toggleSortDirection,
        updateSortKey,
        sortDirection,
    } = usePagination(searchData, defaultItemsPerPage);

    const handleSort = key => {
        updateSortKey(key); // Call the updateSortKey function with the desired sorting key
        toggleSortDirection();
        setCurrentColumn(key);
    };

    const navigate = useNavigate();

    return (
        <div className='overflow-x-hidden'>
            <div className='relative h-[55vh] overflow-x-auto overflow-y-hidden shadow-md sm:rounded-lg mx-8 mt-10  bg-white dark:bg-gray-800'>
                <div className='sticky left-0 flex items-center justify-between gap-2 pb-4 bg-secondary-color-blue dark:bg-primary-color-blue '>
                    <ShowItemsDropdown itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

                    {/* ***********All data search bar************/}

                    <div className='w-80'>
                        <SearchBar setSearchData={setSearchData} tableColumns={tableColumns} dataToSearch={tableData} />
                    </div>
                </div>

                {/* ***********Table************/}

                <table className='w-full text-sm  text-left text-gray-500 dark:text-gray-400  '>
                    <div className='max-h-[45vh] overflow-y-auto overflow-x-hidden'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                {data.length > 0 &&
                                    tableColumns.map(key => (
                                        <th className='w-screen px-6 py-4 cursor-pointer' key={key}>
                                            <input
                                                className={`flex justify-self-center ${
                                                    key === 'id' ? 'w-12' : 'w-60'
                                                } mb-4 pl-3 py-1 text-xs font-thin border border-gray-300 rounded-lg  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                                                key={key}
                                                type='text'
                                                name={key}
                                                placeholder={key.toUpperCase()}
                                                value={inputValues[key]||''}
                                                onChange={e => columnSearcher(e)}
                                            />

                                            <div className='flex gap-2 items-center' onClick={() => handleSort(key)}>
                                                <span> {key} </span> {/* column's name */}
                                                <span>
                                                    <FaSortUp
                                                        size={15}
                                                        color={`${
                                                            sortDirection === 'asc' && key === currentColumn ? '' : '#6b7280'
                                                        }`}
                                                    />
                                                    <FaSortDown
                                                        size={15}
                                                        color={`${
                                                            sortDirection === 'desc' && key === currentColumn
                                                                ? ''
                                                                : '#6b7280'
                                                        }`}
                                                    />
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                            </tr>
                        </thead>

                        <tbody>
                            {slicedData &&
                                slicedData.map((item, i) => (
                                    <tr
                                        key={i}
                                        className='bg-white  dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        {tableColumns?.map((column, index) => (
                                            <td key={index} className='px-6 py-4'>
                                                {item[column]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </div>
                </table>
            </div>

            <nav className='flex items-center justify-between pt-4 mx-8' aria-label='Table navigation'>
                <DataRangeDisplay rangeStart={rangeStart} rangeEnd={rangeEnd} searchData={searchData} />

                <ul className='inline-flex -space-x-px text-sm h-8'>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`${
                            currentPage === 1 ? 'paginate-btn-disable ' : 'paginate-btn-enable'
                        } paginate-btn rounded-l-lg`}>
                        Previous
                    </button>

                    {/* rendering pagination numbers */}
                    <RenderPageNumbers items={{ totalPages, listOfPagesNumber, changePage, currentPage }} />

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`${
                            currentPage === totalPages ? 'paginate-btn-disable ' : 'paginate-btn-enable'
                        } paginate-btn rounded-r-lg`}>
                        Next
                    </button>
                </ul>
            </nav>

            <div className='w-fit mx-auto flex flex-col gap-3 mt-6 text-center'>
                <h6>Do you want to see this table with Material-UI styling?</h6>
                <button onClick={() => navigate('/pagetablematerial')} className='btn flex mx-auto'>
                    Go to previous page
                </button>
            </div>
        </div>
    );
};

export default DataTablePure;
