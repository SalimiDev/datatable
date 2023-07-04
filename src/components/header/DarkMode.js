import useDarkMode from '../../hooks/useDarkMode';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className='p-2  space-x-4 cursor-pointer'>
            {isDarkMode ? (
                <span href='#/' onClick={toggleDarkMode}>
                    <HiOutlineSun color='white' size='25px' />
                </span>
            ) : (
                <span href='#/' onClick={toggleDarkMode}>
                    <HiOutlineMoon color='#0D152B' size='25px' />
                </span>
            )}
        </div>
    );
};

export default DarkMode;
