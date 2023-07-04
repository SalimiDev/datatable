import DarkMode from './DarkMode';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='h-12 w-full flex justify-between'>
            <div className='w-20 h-fit p-2'>
                <img src={logo} alt='logo' />
            </div>
            <DarkMode />
        </div>
    );
};

export default Header;
