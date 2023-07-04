import Header from './components/header/Header';
import Content from './components/contentContainer/Content';

function App() {
    return (
        <div className='h-screen w-full bg-secondary-color-blue dark:bg-primary-color-blue overflow-hidden dark:text-secondary-color-blue'>
            <header>
                <Header />
            </header>
            <main className='w-full h-screen flex flex-col justify-center text-center'>
                <Content />
            </main>
        </div>
    );
}

export default App;
