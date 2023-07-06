import { useEffect, useState, useContext, useMemo } from 'react';
import { Box, Avatar } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import GlobalStyles from '@mui/material/GlobalStyles';

import { DarkModeContext } from '../context/DarkModeContext';

const DataTable = () => {
    const [data, setData] = useState([]);
    const { isDarkMode } = useContext(DarkModeContext);

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });

    useEffect(() => {
        const getStorageData = JSON.parse(localStorage.getItem('tableData'));
        setData(getStorageData);
    }, []);

    const columns = useMemo(
        () => [
            { field: 'id', headerName: 'ID', flex: 0.5 },
            {
                field: 'avatar',
                headerName: 'Avatar',
                width: 60,
                flex: 0.5,
                renderCell: params => <Avatar src={params?.row.avatar} />,
                sortable: false,
                filterable: false,
            },
            {
                field: 'name',
                headerName: 'Name',
                flex: 1,
                cellClassName: 'name-column--cell',
            },
            {
                field: 'username',
                headerName: 'Username',
                type: 'number',
                headerAlign: 'left',
                align: 'left',
            },
            {
                field: 'phone',
                headerName: 'Phone Number',
                flex: 1,
            },
            {
                field: 'email',
                headerName: 'Email',
                flex: 1,
            },
            {
                field: 'country',
                headerName: 'Country',
                flex: 1,
                valueGetter: params => params.row?.address?.country,
            },
            {
                field: 'city',
                headerName: 'City',
                flex: 1,
                valueGetter: params => params.row?.address?.city,
            },
            {
                field: 'street',
                headerName: 'Street',
                flex: 1,
                valueGetter: params => params.row?.address?.street,
            },
            {
                field: 'number',
                headerName: 'Zip Code',
                flex: 1,
                valueGetter: params => params.row?.address?.number,
            },
        ],
        [],
    );

    return (
        <Box m='20px'>
            <GlobalStyles
                styles={{
                    h1: { color: 'grey' },
                    '*::-webkit-scrollbar': {
                        width: '0.4em',
                    },
                    '*::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey',
                    },
                }}
            />
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
                    rows={data}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
};

export default DataTable;
