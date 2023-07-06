import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSvg from '../../assets/svgIcons/LoadingSvg';
import { notify } from '../toast/notify';

import useFetch from '../../hooks/useFetch';
const DataInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState(null);

    const { data, isLoading, error } = useFetch(url);

    //send input value to useFetch hook due to getting data
    const submitHandler = event => {
        event.preventDefault();
        setUrl(inputValue);
    };

    // throw error
    useEffect(() => {
        if (error) notify('error', 'Invalid data!');
    }, [error]);

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
                required
            />
            <button type='submit' className='btn'>
                {isLoading && <LoadingSvg />}
                {isLoading ? 'Loading...' : 'CHEACK!'}
            </button>
        </form>
    );
};

export default DataInput;
