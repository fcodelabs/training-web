import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {

    style: {
      minHeight: '50px',
    },
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progressStyle: { backgroundColor: 'white' }, 
  };

function showToast(message: string, type: 'success' | 'error'): void {
  toast[type](message, toastConfig);
}


function validateDiaryCard(title: string, description: string): boolean {
  if (!title.trim() || !description.trim()) {
    showToast('Title and description are required!', 'error');
    return false;
  }

  return true;
}

function cardAdded(): void {
  showToast('New diary card added successfully!', 'success');
}

function userLogged(): void {
  showToast('Login successful!', 'success');
}

export { validateDiaryCard, cardAdded, userLogged };
