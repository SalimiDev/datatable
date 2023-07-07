import { Button } from '@mui/material';
import notFound from '../assets/notfound.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center text-center'>
            <div>
                <img src={notFound} alt='not found' />
                <Button variant='contained' onClick={() => navigate('/')}>
                    Back Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
