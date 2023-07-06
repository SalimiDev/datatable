import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSvg from '../../assets/svgIcons/LoadingSvg';

import useFetch from '../../hooks/useFetch';
const DataInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState(null);

    const { data, isLoading, error } = useFetch(url);

    const submitHandler = event => {
        event.preventDefault();
        setUrl(inputValue);
    };

    const navigate = useNavigate();
    data?.status === 200 && !isLoading && navigate('/pageTable');

    return (
        <form onSubmit={submitHandler} className='h-9 flex flex-col items-center gap-5 mx-4 xl:flex-row xl:mx-72'>
            <input
                type='text'
                name='url'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Enter your data url'
                className='input'
            />
            <button type='submit' className='btn'>
                <LoadingSvg />
                Loading...
            </button>
        </form>
    );
};

export default DataInput;
