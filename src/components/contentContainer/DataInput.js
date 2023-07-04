import React from 'react';
import LoadingSvg from '../../assets/svgIcons/LoadingSvg';

const DataInput = () => {
    return (
        <form onSubmit={'submitHandler'} className='h-9 flex flex-col items-center gap-5 mx-4 xl:flex-row xl:mx-72'>
            <input type='text' placeholder='Enter your data url' className='input' />
            <button disabled type='button' className='btn'>
                <LoadingSvg />
                Loading...
            </button>
        </form>
    );
};

export default DataInput;
