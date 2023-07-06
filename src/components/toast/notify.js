import { toast } from 'react-toastify';
export const notify = (type, message) => {
    if (type === 'error') {
        toast.error(message);
    }
};
