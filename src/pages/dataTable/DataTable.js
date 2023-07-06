import { useEffect, useState, useContext, memo } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { GlobalStyles } from '@mui/material';

import { DarkModeContext } from '../../context/DarkModeContext';
import SearchBar from '../../components/searchBox/SearchBar';

//configuration of table columns
import columns from './tableColumns';

const DataTable = memo(() => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const { isDarkMode } = useContext(DarkModeContext);

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });

    useEffect(() => {
        const getStorageData = JSON.parse(localStorage.getItem('tableData'));
        setData(getStorageData);
    }, []);

    return (
        <Box m='20px'>
            <GlobalStyles
                styles={{
                    h1: { color: 'grey' },
                    '*::-webkit-scrollbar': {
                        width: '0.4em',
                    },
                    '*::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey',
                    },
                }}
            />
            <SearchBar setSearchData={setSearchData} />
            <Box
                m='40px 0 0 0'
                height='55vh'
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderColor: isDarkMode ? '#475569' : '#9ca3af',
                    },
                    '& .name-column--cell': {
                        color: isDarkMode ? '#f2f0f0' : '#1F2A40',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: isDarkMode ? '#374151' : '#64748b',
                        color: isDarkMode ? '#60a5fa' : '#bfdbfe',
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: isDarkMode ? '#1f2937' : '#cbd5e1',
                        color: isDarkMode ? '#f2f0f0' : '#1F2A40',
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: isDarkMode ? '#374151' : '#64748b',
                    },
                    '& .css-rtrcn9-MuiTablePagination-root': {
                        color: isDarkMode ? '#60a5fa' : '#bfdbfe',
                    },
                    '& .css-1lymaxv-MuiDataGrid-root': {
                        color: isDarkMode ? '#60a5fa' : '#bfdbfe',
                    },
                    '& .MuiCheckbox-root': {
                        color: isDarkMode ? '#bfdbfe' : '#1e5245',
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: isDarkMode ? '#60a5fa' : '#141b2d',
                    },
                    '& .css-128fb87-MuiDataGrid-toolbarContainer': {
                        backgroundColor: isDarkMode ? '#141b2d' : '#bfdbfe',
                    },
                }}>
                <DataGrid
                    rows={searchData.length > 0 ? searchData : data}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
});

export default DataTable;
