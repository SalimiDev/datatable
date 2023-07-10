import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DragDropInput = () => {
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(null);

    const handleDrop = e => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    };

    const handleDragOver = e => {
        e.preventDefault();
    };

    const handleFileUpload = e => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = file => {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const fileData = JSON.parse(event.target.result);
                if (Array.isArray(fileData)) {
                    setData(fileData);
                    setMessage({
                        success: 'Your JSON data uploaded!',
                    });

                    localStorage.setItem('tableData', JSON.stringify(fileData));
                } else {
                    // Invalid data format
                    setMessage({
                        error: 'Invalid JSON data format. Expected an array.',
                    });
                }
            } catch (error) {
                // Invalid JSON syntax
                setMessage({
                    error: 'Invalid JSON syntax.',
                });
            }
        };

        reader.readAsText(file);
    };

    const navigate = useNavigate();

    return (
        <div className='w-screen flex flex-col justify-center items-center mt-10'>
            <h1 className='mx-auto font-bold text-green-600 text-xl'>{message?.success}</h1>
            <h1 className='mx-auto font-bold text-red-500 text-xl'>{message?.error}</h1>

            <div
                className={` w-[75vw] overflow-y-auto mx-auto p-2 m-2 border-dashed border-[1px] border-black dark:border-white ${
                    message?.success ? 'h-[55vh]' : 'h-[12vh]'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}>
                <div className='p-3 m-2'>
                    <h3 className='text-center'>Drag and drop .txt or .json file here.</h3>
                </div>
                {data?.length > 0 && (
                    <div>
                        <h4 className='text-orange-700'>File Data:</h4>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>

            <div className='mt-3'>
                <input type='file' accept='.txt, .json' onChange={handleFileUpload} className='w-52 bg' />
            </div>

            <div className='flex justify-center mt-3'>
                <h2>
                    Back to{' '}
                    <Link to={'/'} className='text-blue-600 underline font-poppins font-bold'>
                        Enter Url
                    </Link>{' '}
                </h2>
            </div>

            <button
                onClick={() => message?.success && navigate('/pagetablematerial')}
                className={`btn mt-12 ${data == null && 'cursor-not-allowed'}`}>
                CHECK DATA
            </button>
        </div>
    );
};

export default DragDropInput;
