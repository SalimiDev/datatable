import React from 'react';

const RenderPageNumbers = ({ items }) => {
    const { totalPages, listOfPagesNumber, changePage, currentPage } = items;
    if (totalPages <= 5) {
        return listOfPagesNumber.map(number => (
            <li
                key={number}
                onClick={() => changePage(number)}
                className={`${
                    number === currentPage
                        ? 'bg-slate-200 dark:bg-gray-700 dark:text-white '
                        : 'dark:bg-gray-800 dark:text-gray-400 text-gray-500 hover:bg-gray-100'
                } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300   dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}>
                {number}
            </li>
        ));
    } else {
        let pages = [];
        if (currentPage <= 2) {
            pages = [1, 2, 3, '...', totalPages];
        } else if (currentPage >= totalPages - 1) {
            pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }

        return pages.map((number, index) => (
            <li
                key={index}
                onClick={() => changePage(number)}
                className={`${
                    number === currentPage
                        ? 'bg-slate-200 dark:bg-gray-700 dark:text-white '
                        : 'dark:bg-gray-800 dark:text-gray-400 text-gray-500 hover:bg-gray-100'
                } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300   dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}>
                {number}
            </li>
        ));
    }
};

export default RenderPageNumbers;
