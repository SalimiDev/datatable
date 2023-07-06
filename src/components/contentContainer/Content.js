import { Routes, Route } from 'react-router-dom';

import DataInput from './DataInput';
import DataTable from '../../pages/dataTable/DataTable';

const Content = () => {
    return (
        <Routes>
            <Route path='/' element={<DataInput />} />
            <Route path='/pageTable' element={<DataTable />} />
        </Routes>
    );
};

export default Content;
