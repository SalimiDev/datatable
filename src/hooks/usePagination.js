import { useState, useEffect } from 'react';

const usePagination = (data, defaultItemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
    const [sortDirection, setSortDirection] = useState('asc'); // Default sorting direction
    const [sortKey, setSortKey] = useState('');
    const [slicedData, setSlicedData] = useState([]);

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when there is a change in sorting or items per page
    }, [sortKey, sortDirection, itemsPerPage]);

    // Function to sort the data based on the current sort key and direction
    const sortData = () => {
        const sortedData = [...data].sort((a, b) => {
            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
            }

            // Handle non-numeric values or fallback comparison
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            }

            // Fallback comparison for other data types
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });

        return sortedData;
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const changePage = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const totalItems = data.length;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const rangeStart = startItem;
    const rangeEnd = Math.min(endItem, totalItems);

    // Function to update the sort key and trigger data sorting
    const updateSortKey = key => {
        setSortKey(key);
    };

    // Function to toggle the sort direction between 'asc' and 'desc'
    const toggleSortDirection = () => {
        setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    const listOfPagesNumber = Array.from({ length: totalPages }, (_, index) => index + 1);

    useEffect(() => {
        const sortedData = sortData();
        const slicedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        setSlicedData(slicedData);
    }, [sortKey, sortDirection, currentPage, itemsPerPage, data]);

    useEffect(() => {
        // Update slicedData when the initial data changes
        const sortedData = sortData();
        const slicedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        setSlicedData(slicedData);
    }, [data]);

    return {
        currentPage,
        slicedData,
        totalPages,
        listOfPagesNumber,
        rangeStart,
        rangeEnd,
        itemsPerPage,
        sortDirection,
        goToNextPage,
        goToPreviousPage,
        changePage,
        setItemsPerPage,
        updateSortKey,
        toggleSortDirection,
    };
};

export default usePagination;
