import Navbar from './components/header/Navbar';
import Content from './components/contentContainer/Content';
import Footer from './components/footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className='h-screen w-full flex flex-col justify-between overflow-auto bg-secondary-color-blue dark:bg-primary-color-blue dark:text-secondary-color-blue'>
            <header>
            <ToastContainer  theme="dark"/>
                <Navbar />
            </header>
            <main>
                <Content />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
