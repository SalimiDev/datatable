import { Routes, Route } from 'react-router-dom';

import DataInput from './DataInput';
import DragDropInput from './DragDropInput';
import DataTableMaterial from '../../pages/dataTableMaterial/DataTableMaterial';
import DataTablePure from '../../pages/dataTablePure/DataTablePure';
import NotFound from '../../pages/notfound/NotFound';

const Content = () => {
    return (
        <Routes>
            <Route path='/' element={<DataInput />} />
            <Route path='/draganddrop' element={<DragDropInput />} />
            <Route path='/pagetablematerial' element={<DataTableMaterial />} />
            <Route path='/pagetablepure' element={<DataTablePure />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Content;
