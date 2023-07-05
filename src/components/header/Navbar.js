import { useState } from 'react';
import headerLogo from '../../assets/headerLogo.png';
import DarkMode from './DarkMode';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href='/#' className='flex items-center'>
                    <img src={headerLogo} className='h-10 mr-3' alt='Paya Holding' />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Paya</span>
                </a>
                <div className='flex md:order-2'>
                    <div>
                        <DarkMode />
                    </div>
                    <button
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                        <svg className='w-5 h-5' fill='none' viewBox='0 0 17 14'>
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${
                        !toggleMenu && 'hidden'
                    }`}>
                    <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <a
                                href='/#'
                                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navlist-item'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navlist-item'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navlist-item'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
