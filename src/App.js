import Navbar from './components/header/Navbar';
import Content from './components/contentContainer/Content';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='h-screen w-full flex flex-col justify-between bg-secondary-color-blue dark:bg-primary-color-blue overflow-hidden dark:text-secondary-color-blue'>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Content />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
