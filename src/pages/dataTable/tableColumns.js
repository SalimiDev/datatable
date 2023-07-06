import { Avatar } from '@mui/material';

const columns = [
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
        field: 'country' || 'street',
        headerName: 'Country',
        flex: 1,
        valueGetter: params => params.row?.address?.country || params.row?.address?.street,
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
        field: 'number' || 'zipcode',
        headerName: 'Zip Code',
        flex: 1,
        valueGetter: params => params.row?.address?.number || params.row?.address?.zipcode,
    },
];

export default columns;
