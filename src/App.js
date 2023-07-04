import Header from './components/header/Header';
import Content from './components/contentContainer/Content';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='h-screen w-full flex flex-col justify-between bg-secondary-color-blue dark:bg-primary-color-blue overflow-hidden dark:text-secondary-color-blue'>
            <header>
                <Header />
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
