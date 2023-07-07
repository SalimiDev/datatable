import { Routes, Route } from 'react-router-dom';

import DataInput from './DataInput';
import DataTable from '../../pages/dataTable/DataTable';
import NotFound from '../../pages/NotFound';

const Content = () => {
    return (
        <Routes>
            <Route path='/' element={<DataInput />} />
            <Route path='/pageTable' element={<DataTable />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Content;
